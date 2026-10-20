// ─────────────────────────────────────────────────────────
// Web Audio Ambient Soundscape Generator
// Meditative, warm acoustic harmonic drone (Tanpura inspired Sa-Pa acoustic frequencies)
// Procedural synthesis with zero external audio assets
// ─────────────────────────────────────────────────────────

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private isPlaying: boolean = false;
  private volume: number = 0.25;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public play() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    if (this.isPlaying) return;

    // Harmonic Tanpura-like drone fundamentals (C# / D resonant chord ~136.1 Hz Om frequency)
    const baseFreq = 136.1; // Cosmic 'Om' frequency
    const harmonics = [
      { freq: baseFreq * 0.5, type: 'sine' as const, gain: 0.3 },   // Deep sub root
      { freq: baseFreq, type: 'sine' as const, gain: 0.35 },        // Root Sa
      { freq: baseFreq * 1.5, type: 'sine' as const, gain: 0.22 },  // Perfect Fifth Pa
      { freq: baseFreq * 2.0, type: 'sine' as const, gain: 0.15 },  // Octave Sa
      { freq: baseFreq * 2.5, type: 'triangle' as const, gain: 0.08 } // Shimmer overtone
    ];

    this.oscillators = [];

    harmonics.forEach(({ freq, type, gain }) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Subtle LFO-like breathing modulation
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.08 + Math.random() * 0.05, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(gain * 0.25, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(oscGain.gain);
      lfo.start();

      oscGain.gain.setValueAtTime(gain, this.ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(this.masterGain);
      osc.start();

      this.oscillators.push(osc);
    });

    // Fade in softly over 2.5 seconds
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(this.volume, this.ctx.currentTime + 2.5);

    this.isPlaying = true;
  }

  public stop() {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;

    // Fade out softly over 1.5 seconds
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.2);

    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore already stopped
        }
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 1250);
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.ctx && this.masterGain && this.isPlaying) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const ambientSound = new AmbientSoundEngine();
