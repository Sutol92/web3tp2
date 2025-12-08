import * as Tone from "https://cdn.jsdelivr.net/npm/tone@next/+esm";

const synth = new Tone.Synth().toDestination();

document.querySelector("#sound_button").addEventListener("click", async () => {
  await Tone.start();

  const now = Tone.now();
  synth.triggerAttackRelease("E1", "8n", now + 0.0);
  synth.triggerAttackRelease("A1", "8n", now + 0.25);
  synth.triggerAttackRelease("F1", "8n", now + 0.5);
  synth.triggerAttackRelease("F4", "8n", now + 0.75);
  synth.triggerAttackRelease("C4", "8n", now + 1.0);
  synth.triggerAttackRelease("F5", "8n", now + 1.25);
  synth.triggerAttackRelease("B4", "8n", now + 1.5);
  synth.triggerAttackRelease("C5", "8n", now + 1.75);
});

document.querySelector(".state").addEventListener("click", async () => {
  await Tone.start();

  const now = Tone.now();
  synth.triggerAttackRelease("E4", "8n", now + 0.0);
});
