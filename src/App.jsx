import { useState } from "react";
import IMAGES from "./images.js";

// ─── HELP CONTENT PER QUESTION ───────────────────────────────────────────────
const helpContent = {
  q1: {
    title: "Understanding Baseline Fetal Heart Rate at Term",
    sections: [
      {
        heading: null,
        text: "According to international guidelines, the normal baseline fetal heart rate (FHR) ranges from 110 to 160 bpm. However, this wide range does not account for gestational age, which is a key factor in interpreting the FHR at term.",
      },
      {
        heading: "Why does the FHR slow down as pregnancy progresses?",
        text: "From 37 weeks onwards, the parasympathetic nervous system matures progressively. As it does, it exerts an increasingly strong inhibitory effect on the fetal heart, gradually slowing the baseline FHR. This means that what is considered a \"normal\" heart rate shifts meaningfully over just a few weeks:",
        bullets: [
          "At 37–38 weeks: a baseline in the upper range (140–160 bpm) is physiologically expected.",
          "At 40–41 weeks: a baseline in the lower range (110–140 bpm) is expected.",
          "Population-based studies confirm: the normal baseline FHR is expected to be below 150 bpm at 40 weeks and below 140 bpm at 41 weeks.",
        ],
      },
      {
        heading: "What does it mean when the FHR is higher than expected for gestational age?",
        text: "A baseline FHR that is higher than expected for the gestational age should not be dismissed simply because it falls within the 110–160 bpm range. It may indicate that the fetus is already under stress before labour even begins, and is compensating through catecholamine release — the fetal equivalent of an adrenaline response. The two main causes of this pre-existing stress are:",
        bullets: [
          "Chronic fetal hypoxia",
          "Chorioamnionitis (intrauterine infection/inflammation)",
        ],
      },
      {
        heading: null,
        text: "In this context, a higher-than-expected FHR at term is a clinical warning sign that warrants careful assessment, regardless of whether it falls within conventional normal limits.",
      },
    ],
    images: ["image10_png"],
    imageLabels: ["Baseline FHR norms by gestational age"],
    references: [
      "Ayres-de-Campos D, Spong CY, Chandraharan E. FIGO consensus guidelines on intrapartum fetal monitoring: Cardiotocography. Int J Gynaecol Obstet. 2015;131(1):13-24.",
      "Serra V, Bellver J, Moulden M, Redman CW. Computerized analysis of normal fetal heart rate pattern throughout gestation. Ultrasound Obstet Gynecol. 2009;34(1):74-9.",
      "Ghi T, Di Pasquo E, Dall'Asta A, et al. Intrapartum fetal heart rate between 150 and 160 bpm at or after 40 weeks and labor outcome. Acta Obstet Gynecol Scand. 2021;100(3):548-554.",
    ],
  },
  q2: {
    title: "Understanding Fetal Heart Rate Variability",
    sections: [
      {
        heading: null,
        text: "Variability refers to the natural oscillations in the FHR signal, measured as the average bandwidth amplitude of the signal over 1-minute segments. In a healthy fetus, these fluctuations should be irregular in both amplitude and frequency — this irregularity is itself a sign of a well-functioning autonomic nervous system.",
      },
      {
        heading: "The four patterns of variability",
        text: null,
      },
      {
        heading: "Normal variability (bandwidth 5–25 bpm)",
        text: "Reflects a healthy balance between the sympathetic and parasympathetic nervous systems, and is a reassuring sign of fetal wellbeing.",
      },
      {
        heading: "Reduced variability (bandwidth below 5 bpm)",
        text: "Suggests decreased autonomic responsiveness. It may indicate fetal sleep — a benign and transient cause — but when persistent (more than 45 minutes), it raises concern for fetal compromise and should be interpreted in clinical context.",
      },
      {
        heading: "Zigzag pattern (bandwidth exceeding 25 bpm for at least 2 minutes)",
        text: "Represents excessive oscillation of the FHR signal. This pattern is associated with acute fetal stress responses.",
      },
      {
        heading: "Sinusoidal pattern",
        text: "Defined by all of the following features:",
        bullets: [
          "A regular, smooth undulating signal",
          "Amplitude of 5–15 bpm",
          "Frequency of 3–5 cycles per minute",
          "Duration of more than 30 minutes",
          "Absence of accelerations",
        ],
      },
      {
        heading: "Two subtypes of sinusoidal pattern:",
        text: null,
        bullets: [
          "Typical sinusoidal — a smooth sine wave",
          "Atypical sinusoidal — an abrupt, \"shark teeth\" appearance",
        ],
      },
      {
        heading: null,
        text: "A true sinusoidal pattern is a sign of severe fetal compromise and requires urgent action: immediate delivery should be organised, or intrauterine transfusion when indicated and feasible.",
      },
      {
        heading: "Sinusoidal vs. pseudo-sinusoidal: a critical distinction",
        text: "It is essential not to confuse a true sinusoidal pattern with a pseudo-sinusoidal pattern. The key difference lies in the alternation: in pseudo-sinusoidal patterns, undulatory waveforms alternate with episodes of normal variability or reactivity. This pattern is not associated with fetal compromise and requires no intervention. It can be seen in physiological situations such as rhythmic fetal mouth movements (e.g. thumb sucking) or following the administration of narcotic analgesics.",
      },
    ],
    images: ["image8_jpg", "image3_png", "image4_png", "image9_png", "image1_png", "image7_png"],
    imageLabels: ["Normal variability", "Reduced variability", "Zigzag pattern", "Typical sinusoidal", "Atypical sinusoidal", "Pseudo-sinusoidal (benign)"],
    references: [
      "Pereira S, Chandraharan E. Recognition of chronic hypoxia and pre-existing foetal injury on the cardiotocograph (CTG): Urgent need to think beyond the guidelines. Porto Biomed J. 2017;2(4):124-129.",
      "Chandraharan E, Pereira S, Ghi T, Gracia Perez-Bonfils A, Fieni S, Jia YJ, Griffiths K, Sukumaran S, Ingram C, Reeves K, Bolten M, Loser K, Carreras E, Suy A, Garcia-Ruiz I, Galli L, Zaima A. International expert consensus statement on physiological interpretation of cardiotocograph (CTG): First revision (2024). Eur J Obstet Gynecol Reprod Biol. 2024;302:346-355.",
    ],
  },
  q3: {
    title: "Understanding Fetal Heart Rate Cycling",
    sections: [
      {
        heading: null,
        text: "Cycling refers to the alternation between epochs of normal variability and reduced variability on the CTG trace. These fluctuations reflect the natural succession of fetal behavioural states — active sleep and quiet sleep — and are a reassuring indicator of an intact, non-depressed fetal autonomic nervous system.",
      },
      {
        heading: "What does cycling tell us?",
        text: null,
        bullets: [
          "During active sleep: the fetus shows normal variability, often accompanied by accelerations and movements.",
          "During quiet sleep: variability is physiologically reduced, reflecting a state of decreased autonomic activity.",
        ],
      },
      {
        heading: null,
        text: "This alternation is normal and expected. However, a key clinical rule applies: a quiet sleep episode should not last more than 50 minutes. Beyond this threshold, prolonged reduced variability can no longer be attributed to a benign sleep state and should raise concern for fetal compromise.",
      },
      {
        heading: "Why does cycling matter?",
        text: "The presence of cycling is one of the most reassuring features on a CTG trace. Conversely, its absence — particularly when reduced variability is persistent rather than cyclic — should prompt careful clinical reassessment, as it may reflect a depressed or compromised fetal central nervous system.",
      },
    ],
    images: ["image5_jpg"],
    imageLabels: ["Cycling: alternation between normal and reduced variability"],
    references: [
      "Pereira S, Lau K, Modestini C, Wertheim D, Chandraharan E. Absence of fetal heart rate cycling on the intrapartum cardiotocograph (CTG) is associated with intrapartum pyrexia and lower Apgar scores. J Matern Fetal Neonatal Med. 2022;35(25):7980-7985.",
    ],
  },
  q4: {
    title: "Understanding Fetal Heart Rate Accelerations",
    sections: [
      {
        heading: null,
        text: "Accelerations are abrupt, transient increases in the fetal heart rate above the baseline. They are one of the most reassuring features on a CTG trace, as they reflect an active, responsive fetal autonomic nervous system.",
      },
      {
        heading: "How is a true acceleration defined?",
        text: "A true acceleration must meet all of the following criteria:",
        bullets: [
          "Abrupt onset: the rise from baseline to peak occurs in less than 30 seconds",
          "Amplitude: the FHR rises by more than 15 bpm above the baseline",
          "Duration: it lasts more than 15 seconds but less than 10 minutes",
          "Return to baseline: the acceleration must both start from and return to a stable baseline",
        ],
      },
      {
        heading: null,
        text: "If the rise lasts 10 minutes or more, it is no longer considered an acceleration but rather a change in baseline.",
      },
      {
        heading: "Why does this definition matter?",
        text: "Each criterion carries clinical significance. The abruptness of onset distinguishes true accelerations from slower, more gradual FHR changes. The requirement for a stable baseline before and after ensures that the acceleration is a genuine, isolated response rather than part of a broader pattern of instability. Together, these features confirm that the fetal nervous system is capable of generating a rapid, coordinated cardiovascular response — a hallmark of fetal wellbeing.",
      },
    ],
    images: ["image2_jpg"],
    imageLabels: ["True acceleration: abrupt onset, amplitude > 15 bpm, duration 15s–10min"],
    references: [
      "Al Fahdi B, Chandraharan E. True vs spurious intrapartum fetal heart rate accelerations on the cardiotocograph (CTG): An urgent need for caution. Glob J Reprod Med. 2020;7(5):555722.",
    ],
  },
  q5: {
    title: "Understanding Repetitive Fetal Heart Rate Decelerations",
    sections: [
      {
        heading: null,
        text: "Decelerations are transient decreases in the fetal heart rate below the baseline. To be clinically significant, they must meet the following criteria:",
        bullets: [
          "Amplitude: a drop of more than 15 bpm below the baseline",
          "Duration: lasting more than 15 seconds",
        ],
      },
      {
        heading: "What is the physiological purpose of decelerations?",
        text: "Decelerations are not simply a sign of distress — they are primarily a protective reflex. When the fetus is exposed to hypoxic or mechanical stress, slowing the heart rate reduces myocardial workload and oxygen consumption, helping to maintain aerobic metabolism within the heart muscle. In this sense, the fetal heart is actively defending itself.",
      },
      {
        heading: null,
        text: "However, the pattern, shape, and context of decelerations determine whether this reflex is appropriate and transient, or whether it signals a fetus that is struggling to compensate.",
      },
      {
        heading: "Late decelerations",
        text: "Late decelerations are the most clinically concerning deceleration pattern. They are characterised by one or more of the following features:",
        bullets: [
          "Gradual onset (slow decline from baseline to nadir)",
          "Gradual return to baseline",
          "Reduced or increased variability within the deceleration itself",
        ],
      },
      {
        heading: null,
        text: "These features reflect a chemoreceptor-mediated response to fetal hypoxaemia: when oxygen levels fall, peripheral chemoreceptors trigger a vagal reflex that slows the heart. The \"lateness\" of the response — occurring after the peak of a contraction rather than during it — indicates that the fetus is responding to a drop in oxygen that builds up progressively with each contraction.",
      },
      {
        heading: "Shallow decelerations: a special case",
        text: "In a trace already showing absent accelerations and reduced variability, the amplitude threshold is lowered. Decelerations of only 10–15 bpm are sufficient to be classified as late decelerations in this context. These are called shallow decelerations, and their significance should not be underestimated: a small amplitude does not mean a small problem. In a fetus with an already-compromised autonomic nervous system, even a modest deceleration carries the same clinical weight as a deeper one.",
      },
    ],
    images: ["image6_jpg"],
    imageLabels: ["Shallow decelerations in context of reduced variability"],
    references: [
      "Ayres-de-Campos D, Spong CY, Chandraharan E. FIGO consensus guidelines on intrapartum fetal monitoring: Cardiotocography. Int J Gynaecol Obstet. 2015;131(1):13-24.",
      "Westgate JA, Wibbens B, Bennet L, Wassink G, Parer JT, Gunn AJ. The intrapartum deceleration in center stage: a physiologic approach to the interpretation of fetal heart rate changes in labor. Am J Obstet Gynecol. 2007;197(3):236.e1-11.",
    ],
  },
  q6: {
    title: "Understanding the Sinusoidal Pattern",
    sections: [
      {
        heading: "Definition",
        text: "The sinusoidal pattern is defined by ALL of the following features:",
        bullets: [
          "A regular, smooth undulating signal",
          "Amplitude of 5–15 bpm",
          "Frequency of 3–5 cycles per minute",
          "Duration of more than 30 minutes",
          "Absence of accelerations",
        ],
      },
      {
        heading: "Typical sinusoidal",
        text: "A smooth sine wave pattern. This is a sign of severe fetal compromise and requires urgent action: immediate delivery should be organised, or intrauterine transfusion when indicated and feasible.",
      },
      {
        heading: "Atypical sinusoidal",
        text: "An abrupt, \"shark teeth\" appearance. Also a sign of severe fetal compromise requiring urgent action.",
      },
      {
        heading: "⚠ Sinusoidal vs. pseudo-sinusoidal: a critical distinction",
        text: "It is essential not to confuse a true sinusoidal pattern with a pseudo-sinusoidal pattern. The key difference lies in the alternation: in pseudo-sinusoidal patterns, undulatory waveforms alternate with episodes of normal variability or reactivity. This pattern is not associated with fetal compromise and requires no intervention. It can be seen in physiological situations such as rhythmic fetal mouth movements (e.g. thumb sucking) or following the administration of narcotic analgesics.",
      },
    ],
    images: ["image9_png", "image1_png", "image7_png"],
    imageLabels: ["Typical sinusoidal pattern", "Atypical sinusoidal pattern", "Pseudo-sinusoidal (benign — not a true sinusoidal)"],
    references: [
      "Pereira S, Chandraharan E. Recognition of chronic hypoxia and pre-existing foetal injury on the cardiotocograph (CTG): Urgent need to think beyond the guidelines. Porto Biomed J. 2017;2(4):124-129.",
      "Chandraharan E, Pereira S, Ghi T, Gracia Perez-Bonfils A, Fieni S, Jia YJ, Griffiths K, Sukumaran S, Ingram C, Reeves K, Bolten M, Loser K, Carreras E, Suy A, Garcia-Ruiz I, Galli L, Zaima A. International expert consensus statement on physiological interpretation of cardiotocograph (CTG): First revision (2024). Eur J Obstet Gynecol Reprod Biol. 2024;302:346-355.",
    ],
  },
};

// ─── SCENARIOS (5 questions) ─────────────────────────────────────────────────
// Each accepted array = all valid answers for that question in this scenario
const scenarios = [
  {
    id: 1,
    accepted: {
      q1: ["yes"],
      q2: ["yes"],
      q3: ["yes"],
      q4: ["yes"],
      q5: ["no"],
    },
    diagnosis: "FIT FOR LABOUR",
    diagnosisDetail: null,
    context: null,
    management: ["FIT FOR LABOUR"],
    color: "#22c55e", icon: "✓"
  },
  {
    id: 2,
    accepted: {
      q1: ["yes", "higher"],
      q2: ["yes", "reduced", "zigzag", "atypical sinusoidal"],
      q3: ["yes", "no"],
      q4: ["spurious"],
      q5: ["yes", "no"],
    },
    diagnosis: "RUPI",
    diagnosisDetail: null,
    context: "Reduced fetal movements",
    management: ["No further stress", "Immediate C section", "Notify pediatricians"],
    color: "#ef4444", icon: "⚠"
  },
  {
    id: 3,
    accepted: {
      q1: ["higher"],
      q2: ["typical sinusoidal"],
      q3: ["no"],
      q4: ["no"],
      q5: ["no"],
    },
    diagnosis: "CHRONIC ANEMIA",
    diagnosisDetail: "(Early stage)",
    context: "Reduced fetal movements",
    management: ["No further stress", "Immediate C section", "Notify pediatricians"],
    color: "#f97316", icon: "⚠"
  },
  {
    id: 4,
    accepted: {
      q1: ["lower"],
      q2: ["typical sinusoidal"],
      q3: ["no"],
      q4: ["no"],
      q5: ["no"],
    },
    diagnosis: "CHRONIC ANEMIA",
    diagnosisDetail: "(Late stage)",
    context: "Reduced fetal movements",
    management: ["No further stress", "Immediate C section", "Notify pediatricians"],
    color: "#f97316", icon: "⚠"
  },
  {
    id: 5,
    accepted: {
      q1: ["yes", "no"],
      q2: ["yes", "reduced", "zigzag", "atypical sinusoidal"],
      q3: ["no"],
      q4: ["no"],
      q5: ["no"],
    },
    diagnosis: "FETO MATERNAL HEMORRHAGE",
    diagnosisDetail: null,
    context: "Vaginal bleeding, reduced fetal movements",
    management: ["No further stress", "Immediate C section", "Notify pediatricians"],
    color: "#dc2626", icon: "⚠"
  },
  {
    id: 6,
    accepted: {
      q1: ["higher"],
      q2: ["reduced"],
      q3: ["no"],
      q4: ["no"],
      q5: ["no"],
    },
    diagnosis: "CHRONIC HYPOXIA",
    diagnosisDetail: "(or Feto Maternal Hemorrhage)",
    context: "Vaginal bleeding, reduced fetal movements",
    management: ["No further stress", "Immediate C section", "Notify pediatricians"],
    color: "#ef4444", icon: "⚠"
  },
  {
    id: 7,
    accepted: {
      q1: ["yes"],
      q2: ["atypical sinusoidal"],
      q3: ["no"],
      q4: ["yes"],
      q5: ["no"],
    },
    diagnosis: "FIT FOR LABOUR",
    diagnosisDetail: null,
    context: "Glottic movements at the ultrasound",
    management: ["FIT FOR LABOUR"],
    color: "#22c55e", icon: "✓"
  },
  {
    id: 8,
    accepted: {
      q1: ["higher"],
      q2: ["reduced"],
      q3: ["no"],
      q4: ["no"],
      q5: ["yes", "no"],
    },
    diagnosis: "CHRONIC HYPOXIA",
    diagnosisDetail: "(or Antenatal Stroke)",
    context: "Reduced fetal movements",
    management: ["No further stress", "Immediate C section", "Notify pediatricians"],
    color: "#ef4444", icon: "⚠"
  },
  {
    id: 9,
    accepted: {
      q1: ["lower"],
      q2: ["reduced"],
      q3: ["no"],
      q4: ["no"],
      q5: ["yes"],
    },
    diagnosis: "CHRONIC HYPOXIA",
    diagnosisDetail: "(Pre-terminal)",
    context: "Reduced fetal movements",
    management: ["No further stress", "Immediate C section", "Notify pediatricians"],
    color: "#dc2626", icon: "⚠"
  },
  {
    id: 10,
    accepted: {
      q1: ["higher"],
      q2: ["yes", "zigzag", "atypical sinusoidal"],
      q3: ["no"],
      q4: ["yes", "spurious"],
      q5: ["no"],
    },
    diagnosis: "CHORIOAMNIONITIS",
    diagnosisDetail: null,
    context: "Maternal pyrexia, meconium, PROM, cervical sweep",
    management: ["No further stress", "Immediate C section", "Notify pediatricians"],
    color: "#a855f7", icon: "⚠"
  },
  {
    id: 11,
    accepted: {
      q1: ["higher"],
      q2: ["reduced"],
      q3: ["yes", "no"],
      q4: ["yes", "no"],
      q5: ["no"],
    },
    diagnosis: "SUPRA VENTRICULAR TACHYCARDIA",
    diagnosisDetail: null,
    context: "Reduced fetal movements",
    management: ["No further stress", "Notify fetal medicine unit center", "Notify pediatricians"],
    color: "#8b5cf6", icon: "⚠"
  },
];

// ─── QUESTIONS (5 questions, with multi-option answers) ───────────────────────
const questions = [
  {
    id: "q1", num: 1,
    text: "Baseline FHR APPROPRIATE for gestational age?",
    options: [
      { value: "yes",    label: "YES — Appropriate" },
      { value: "higher", label: "NO — Higher than expected" },
      { value: "lower",  label: "NO — Lower than expected" },
    ],
  },
  {
    id: "q2", num: 2,
    text: "NORMAL variability?",
    options: [
      { value: "yes",                label: "YES — Normal (5–25 bpm)" },
      { value: "reduced",            label: "NO — Reduced (<5 bpm)" },
      { value: "zigzag",             label: "NO — Zigzag (>25 bpm)" },
      { value: "typical sinusoidal", label: "NO — Typical sinusoidal" },
      { value: "atypical sinusoidal",label: "NO — Atypical sinusoidal" },
    ],
  },
  {
    id: "q3", num: 3,
    text: "CYCLING present?",
    options: [
      { value: "yes", label: "YES" },
      { value: "no",  label: "NO" },
    ],
  },
  {
    id: "q4", num: 4,
    text: "TRUE accelerations?",
    options: [
      { value: "yes",      label: "YES — True accelerations" },
      { value: "no",       label: "NONE" },
      { value: "spurious", label: "SPURIOUS only" },
    ],
  },
  {
    id: "q5", num: 5,
    text: "Repetitive shallow or late decelerations?",
    options: [
      { value: "yes", label: "YES" },
      { value: "no",  label: "NO" },
    ],
  },
];

// ─── MATCHING ALGORITHM ───────────────────────────────────────────────────────
function matchScenario(answers) {
  let best = null;
  let bestScore = -1;

  for (const s of scenarios) {
    let score = 0;
    const total = Object.keys(s.accepted).length;
    for (const [qid, accepted] of Object.entries(s.accepted)) {
      if (accepted.includes(answers[qid])) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      best = { scenario: s, score, total };
    }
  }
  return best;
}


function HelpModal({ questionId, onClose, imageData }) {
  const help = helpContent[questionId];
  if (!help) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#ffffff",
          border: "1px solid rgba(100,80,200,0.2)",
          borderRadius: 20,
          padding: "32px 28px",
          maxWidth: 660,
          width: "100%",
          maxHeight: "88vh",
          overflowY: "auto",
          boxShadow: "0 25px 80px rgba(100,80,200,0.2)",
          animation: "fadeSlideIn 0.3s ease forwards",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "#5b3fcf", textTransform: "uppercase", marginBottom: 6 }}>
              📖 Clinical Reference
            </div>
            <h3 style={{ color: "#1e1a3c", fontWeight: "bold", fontSize: 17, margin: 0, lineHeight: 1.4, fontFamily: "'Georgia', serif" }}>
              {help.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "#f5f0ff", border: "1px solid rgba(100,80,200,0.2)",
              color: "#5b3fcf", borderRadius: 8, cursor: "pointer",
              width: 32, height: 32, fontSize: 16, flexShrink: 0, marginLeft: 16,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >✕</button>
        </div>

        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(100,80,200,0.25), transparent)", marginBottom: 24 }} />

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {help.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <div style={{
                  fontSize: 13,
                  fontWeight: "bold",
                  color: "#3b2d8a",
                  fontFamily: "'Georgia', serif",
                  marginBottom: 8,
                  paddingLeft: 10,
                  borderLeft: "3px solid #6d4fcc",
                }}>
                  {section.heading}
                </div>
              )}
              {section.text && (
                <p style={{
                  color: "#3d3060",
                  lineHeight: 1.75,
                  margin: "0 0 8px",
                  fontSize: 13.5,
                  fontFamily: "'Georgia', serif",
                }}>
                  {section.text}
                </p>
              )}
              {section.bullets && (
                <ul style={{ margin: "0 0 0 8px", padding: "0 0 0 16px", display: "flex", flexDirection: "column", gap: 5 }}>
                  {section.bullets.map((b, j) => (
                    <li key={j} style={{ color: "#3d3060", fontSize: 13.5, lineHeight: 1.6, fontFamily: "'Georgia', serif" }}>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Images */}
        {help.images && help.images.length > 0 && (
          <div style={{ marginTop: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "#8b7cc0", textTransform: "uppercase", marginBottom: 14 }}>
              Illustrations
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {help.images.map((imgKey, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
                  <img
                    src={imageData[imgKey]}
                    alt={help.imageLabels ? help.imageLabels[i] : `Figure ${i+1}`}
                    style={{
                      maxWidth: "100%",
                      borderRadius: 10,
                      border: "1px solid rgba(100,80,200,0.15)",
                      objectFit: "contain",
                      boxShadow: "0 2px 12px rgba(100,80,200,0.08)",
                    }}
                  />
                  {help.imageLabels && help.imageLabels[i] && (
                    <span style={{ fontSize: 11, color: "#8b7cc0", fontStyle: "italic", textAlign: "center" }}>
                      {help.imageLabels[i]}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* References */}
        {help.references && help.references.length > 0 && (
          <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(100,80,200,0.12)" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "#8b7cc0", textTransform: "uppercase", marginBottom: 12 }}>
              References
            </div>
            <ol style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column", gap: 8 }}>
              {help.references.map((ref, i) => (
                <li key={i} style={{
                  fontSize: 11,
                  color: "#6b5ea8",
                  lineHeight: 1.6,
                  fontFamily: "'Georgia', serif",
                  fontStyle: "italic",
                }}>
                  {ref}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [step, setStep] = useState(0);
  const [helpOpen, setHelpOpen] = useState(false);

  const currentQ = questions[step - 1];

  function handleAnswer(val) {
    const newAnswers = { ...answers, [currentQ.id]: val };
    setAnswers(newAnswers);
    if (step < 5) { setStep(step + 1); }
    else { setResult(matchScenario(newAnswers)); setStep(6); }
  }

  function restart() { setAnswers({}); setResult(null); setStep(0); }

  const isFit = result?.scenario?.diagnosis === "FIT FOR LABOUR";

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#f0f4ff,#e8eef8,#f5f0ff)", fontFamily:"'Georgia',serif", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"20px" }}>
      <style>{`
        @keyframes fadeSlideIn { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .btn-option { background:#f8f6ff; border:1.5px solid rgba(100,80,200,0.2); color:#1e1a3c; padding:14px 28px; border-radius:12px; cursor:pointer; font-size:15px; font-family:'Georgia',serif; letter-spacing:0.05em; transition:all 0.2s ease; width:100%; text-align:left; }
        .btn-option:hover { background:#ede9ff; border-color:rgba(100,80,200,0.5); transform:translateX(6px); }
        .help-btn { background:#ede9ff; border:1px solid rgba(100,80,200,0.35); color:#5b3fcf; border-radius:50%; width:32px; height:32px; cursor:pointer; font-size:15px; font-weight:bold; display:flex; align-items:center; justify-content:center; transition:all 0.2s; flex-shrink:0; font-family:sans-serif; }
        .help-btn:hover { background:#ddd6fe; transform:scale(1.1); box-shadow:0 0 12px rgba(100,80,200,0.25); }
        .card { animation:fadeSlideIn 0.5s ease forwards; }
        ::-webkit-scrollbar { width:6px; } ::-webkit-scrollbar-track { background:rgba(100,80,200,0.05); border-radius:3px; } ::-webkit-scrollbar-thumb { background:rgba(100,80,200,0.3); border-radius:3px; }
      `}</style>

      {/* Help Modal */}
      {helpOpen && currentQ && (
        <HelpModal questionId={currentQ.id} onClose={() => setHelpOpen(false)} imageData={IMAGES} />
      )}

      {/* Header */}
      <div style={{ marginBottom:32, textAlign:"center" }}>
        <div style={{ fontSize:11, letterSpacing:"0.3em", color:"#7c6db5", textTransform:"uppercase", marginBottom:8 }}>Fetal CTG Assessment Tool</div>
        <h1 style={{ fontSize:26, color:"#1e1a3c", fontWeight:"normal", margin:0, letterSpacing:"0.02em" }}>Is This Fetus Fit for Labour?</h1>
        <div style={{ width:60, height:2, background:"linear-gradient(90deg,transparent,#a78bfa,transparent)", margin:"12px auto 0" }} />
      </div>

      {/* Progress bar */}
      {step >= 1 && step <= 5 && (
        <div style={{ width:"100%", maxWidth:580, marginBottom:24 }}>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
            {questions.map((q,i) => (
              <div key={q.id} style={{ flex:1, height:6, borderRadius:3, marginRight:4, background: i < step ? "#6d4fcc" : "rgba(100,80,200,0.15)", transition:"background 0.3s" }} />
            ))}
          </div>
          <div style={{ fontSize:12, color:"#8b7cc0", textAlign:"right" }}>Question {step} / 5</div>
        </div>
      )}

      {/* CARD */}
      <div className="card" key={step} style={{ background:"#ffffff", borderRadius:20, border:"1px solid rgba(100,80,200,0.15)", boxShadow:"0 8px 40px rgba(100,80,200,0.10)", padding:"40px 36px", maxWidth:580, width:"100%" }}>

        {/* INTRO */}
        {step === 0 && (
          <div style={{ textAlign:"center" }}>
            <div style={{ marginBottom:16, display:"flex", justifyContent:"center" }}>
              <img src={IMAGES.twerisIcon} alt="TWERIS" style={{ width:64, height:64, objectFit:"contain" }} />
            </div>
            <p style={{ color:"#3d3060", lineHeight:1.7, marginBottom:8 }}>
              Observe <strong style={{ color:"#1e1a3c" }}>60 minutes of CTG</strong> at admission, then answer the following 5 questions.
            </p>
            <p style={{ color:"#7c6db5", fontSize:13, marginBottom:32 }}>
              The tool will identify the most probable diagnosis and recommend a management plan.
            </p>
            <button onClick={() => setStep(1)} style={{ background:"linear-gradient(135deg,#7c3aed,#a78bfa)", border:"none", color:"#fff", padding:"14px 40px", borderRadius:12, cursor:"pointer", fontSize:16, fontFamily:"'Georgia',serif", letterSpacing:"0.05em" }}
              onMouseOver={e=>e.target.style.opacity="0.85"} onMouseOut={e=>e.target.style.opacity="1"}>
              Begin Assessment →
            </button>
          </div>
        )}

        {/* QUESTION */}
        {step >= 1 && step <= 5 && currentQ && (
          <div>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
              <div style={{ display:"inline-block", background:"#ede9ff", color:"#5b3fcf", borderRadius:8, padding:"4px 12px", fontSize:12, letterSpacing:"0.15em" }}>
                QUESTION {currentQ.num} / 5
              </div>
              <button className="help-btn" onClick={() => setHelpOpen(true)} title="Clinical guidance">?</button>
            </div>

            <h2 style={{ color:"#1e1a3c", fontSize:18, fontWeight:"normal", marginBottom:24, lineHeight:1.5 }}>
              {currentQ.text}
            </h2>

            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {currentQ.options.map(opt => (
                <button key={opt.value} className="btn-option" onClick={() => handleAnswer(opt.value)}>
                  {opt.label}
                </button>
              ))}
            </div>

            {step > 1 && (
              <button onClick={() => { setStep(step-1); setAnswers(prev => { const n={...prev}; delete n[currentQ.id]; return n; }); }}
                style={{ background:"none", border:"none", color:"#9d8fd4", cursor:"pointer", marginTop:20, fontSize:13, fontFamily:"'Georgia',serif" }}>
                ← Previous question
              </button>
            )}
          </div>
        )}

        {/* RESULT */}
        {step === 6 && result && (
          <div style={{ textAlign:"center" }}>
            <div style={{ fontSize:52, marginBottom:16, filter:`drop-shadow(0 0 20px ${result.scenario.color})` }}>
              {isFit ? "✅" : "🚨"}
            </div>
            <div style={{ display:"inline-block", background:`${result.scenario.color}22`, border:`1.5px solid ${result.scenario.color}66`, borderRadius:12, padding:"6px 18px", fontSize:11, letterSpacing:"0.2em", color:result.scenario.color, marginBottom:16, textTransform:"uppercase" }}>
              {result.score === result.total ? "Most Probable Diagnosis" : "Closest Matching Diagnosis"}
            </div>
            <h2 style={{ color:result.scenario.color, fontSize:22, fontWeight:"bold", margin:"0 0 4px", letterSpacing:"0.03em" }}>
              {result.scenario.diagnosis}
            </h2>
            {result.scenario.diagnosisDetail && (
              <p style={{ color:"#6b5ea8", fontSize:14, margin:"0 0 12px" }}>{result.scenario.diagnosisDetail}</p>
            )}
            {result.scenario.context && (
              <div style={{ background:"#f5f0ff", borderRadius:10, padding:"10px 16px", marginBottom:16, fontSize:13, color:"#5b3fcf", fontStyle:"italic" }}>
                Clinical context: {result.scenario.context}
              </div>
            )}

            {/* Imperfect match warning */}
            {result.score < result.total && (() => {
              const qLabels = { q1:"Baseline FHR", q2:"Variability", q3:"Cycling", q4:"Accelerations", q5:"Decelerations" };
              const mismatches = questions.filter(q => {
                const expected = result.scenario.accepted[q.id];
                return expected && !expected.includes(answers[q.id]);
              });
              return (
                <div style={{ background:"#fffbeb", border:"1.5px solid #f59e0b", borderRadius:12, padding:"14px 16px", marginBottom:16, textAlign:"left" }}>
                  <div style={{ fontSize:12, fontWeight:"bold", color:"#92400e", marginBottom:8 }}>
                    ⚠ Imperfect match — {result.total - result.score} criterion/criteria differ:
                  </div>
                  {mismatches.map(q => {
                    const expected = result.scenario.accepted[q.id];
                    return (
                      <div key={q.id} style={{ fontSize:12, color:"#78350f", marginBottom:4, paddingLeft:8, borderLeft:"2px solid #f59e0b" }}>
                        <strong>{qLabels[q.id]}</strong>: you answered <strong>{answers[q.id]?.toUpperCase()}</strong>, expected <strong>{expected.join(" or ").toUpperCase()}</strong>
                      </div>
                    );
                  })}
                  <div style={{ fontSize:11, color:"#92400e", marginTop:10, fontStyle:"italic" }}>
                    This is the closest match. Consider the diverging criterion in your clinical assessment.
                  </div>
                </div>
              );
            })()}

            <div style={{ height:1, background:"rgba(100,80,200,0.12)", margin:"16px 0" }}/>
            <div style={{ fontSize:11, letterSpacing:"0.2em", color:"#8b7cc0", textTransform:"uppercase", marginBottom:12 }}>Management</div>
            <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
              {result.scenario.management.map((m,i) => (
                <div key={i} style={{ background:`${result.scenario.color}18`, border:`1px solid ${result.scenario.color}44`, borderRadius:10, padding:"10px 16px", color:"#1e1a3c", fontSize:14, textAlign:"left", display:"flex", alignItems:"center", gap:10 }}>
                  <span style={{ color:result.scenario.color, fontSize:16 }}>›</span>{m}
                </div>
              ))}
            </div>

            {/* Match score */}
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:11, letterSpacing:"0.15em", color:"#8b7cc0", textTransform:"uppercase", marginBottom:8 }}>Match Score</div>
              <div style={{ background:"rgba(100,80,200,0.12)", borderRadius:8, height:8, overflow:"hidden" }}>
                <div style={{ height:"100%", width:`${Math.round((result.score/result.total)*100)}%`, background:`linear-gradient(90deg,${result.scenario.color}88,${result.scenario.color})`, borderRadius:8, transition:"width 1s ease" }}/>
              </div>
              <div style={{ fontSize:12, color:"#8b7cc0", marginTop:6 }}>{result.score}/{result.total} criteria matched</div>
            </div>

            {/* Answer summary */}
            <div style={{ textAlign:"left", marginBottom:24 }}>
              <div style={{ fontSize:11, letterSpacing:"0.2em", color:"#8b7cc0", textTransform:"uppercase", marginBottom:12 }}>Your Answers</div>
              <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                {questions.map(q => {
                  const userAns = answers[q.id];
                  const expected = result.scenario.accepted[q.id];
                  const matched = expected && expected.includes(userAns);
                  const displayLabel = q.options.find(o => o.value === userAns)?.label || userAns?.toUpperCase();
                  return (
                    <div key={q.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", background: matched ? "#f0fdf4" : "#fafaff", borderRadius:8, padding:"8px 12px", border:`1px solid ${matched?"rgba(34,197,94,0.3)":"rgba(239,68,68,0.2)"}` }}>
                      <span style={{ fontSize:12, color:"#4a4070", flex:1 }}>{q.text}</span>
                      <span style={{ fontSize:11, fontWeight:"bold", color: matched?"#16a34a":"#dc2626", marginLeft:8, whiteSpace:"nowrap" }}>
                        {matched?"✓":"◈"} {displayLabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <button onClick={restart} style={{ background:"#f5f0ff", border:"1px solid rgba(100,80,200,0.25)", color:"#5b3fcf", padding:"12px 32px", borderRadius:12, cursor:"pointer", fontSize:14, fontFamily:"'Georgia',serif", letterSpacing:"0.05em" }}
              onMouseOver={e=>e.currentTarget.style.background="#ede9ff"} onMouseOut={e=>e.currentTarget.style.background="#f5f0ff"}>
              ↺ New Assessment
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ marginTop:24, display:"flex", alignItems:"center", gap:8, opacity:0.5 }}>
        <img src={IMAGES.twerisIcon} alt="TWERIS" style={{ width:22, height:22, objectFit:"contain" }} />
        <span style={{ fontSize:11, color:"#7c6db5", letterSpacing:"0.2em", textTransform:"uppercase" }}>TWERIS · Fetal CTG Assessment</span>
      </div>
    </div>
  );
}
