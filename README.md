# 🩸 Blood Lab

**An interactive, browser-based learning simulator for human blood groups, transfusion compatibility, and immune responses.**

Blood Lab turns key concepts from blood science into an approachable visual learning experience. Explore the ABO and Rh(D) systems, run simplified red-blood-cell compatibility scenarios, inspect an animated illustration, and check your understanding with a short quiz.

> [!IMPORTANT]
> **Educational use only.** Blood Lab is a simplified teaching model, not a medical tool. It does not determine whether a real transfusion is safe. Real transfusion decisions require qualified healthcare professionals, laboratory testing, and clinical protocols.

---

## ✨ Features

- **Transfusion simulator** — Select donor and recipient blood groups and view a simplified compatibility report.
- **Visual model** — Explore an animated illustration of red blood cells, antigens, antibodies, and antibody binding.
- **ABO system guide** — Learn about A and B antigens and the antibodies commonly associated with each ABO group.
- **Rh(D) system guide** — Understand the D antigen, Rh-positive and Rh-negative groups, and sensitization.
- **Immune response overview** — Follow the high-level stages of antigen recognition, B-cell activation, antibody production, and immune memory.
- **Blood science library** — Review the roles of red blood cells, white blood cells, plasma, and platelets.
- **Knowledge quiz** — Test your understanding with five multiple-choice questions.
- **Responsive interface** — Use the app on desktop or mobile, with light and dark themes based on your device preference.
- **No build step** — The project runs directly in a modern web browser.

## 🚀 Getting Started

### Requirements

- A modern web browser with JavaScript enabled.
- Git, if you want to clone the repository.

There are no package installations, frameworks, or external runtime dependencies.

### Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/AlfaYuuki/Blood-Lab.git
   ```

2. Open the project folder:

   ```bash
   cd Blood-Lab
   ```

3. Open `index.html` in your browser.

You can also use a local static-file server if you prefer. No compilation or build command is required.

## 🧭 Using the Simulator

1. Open the **Simulator** tab.
2. Choose a donor blood type and a recipient blood type.
3. Optionally select the sensitization setting to model a recipient who has previously developed anti-D antibodies.
4. Select **Run transfusion simulation**.
5. Review the visual model, compatibility checks, and explanatory report.
6. Use **Replay** to run the selected scenario again or **Reset** to restore the default selections.

Explore the other tabs to learn about ABO groups, Rh(D), immune responses, and the components of blood. Finish with the **Quiz** to review what you learned.

## 🧬 What the Model Covers

### ABO blood groups

The simulator represents the A and B antigens on red blood cells and the corresponding naturally occurring ABO antibodies commonly found in plasma.

### Rh(D) blood groups

The simulator represents the presence or absence of the D antigen. Its optional sensitization setting illustrates why anti-D antibodies may matter when an Rh-negative recipient has previously been exposed to D-positive red blood cells.

### Model limitations

The simulator focuses on selected ABO and Rh(D) concepts. It does not model every blood-group antigen, antibody, clinical factor, or transfusion-testing procedure. Its visual effects are explanatory illustrations, not biological measurements or predictions.

**Do not use its results to choose donors, recipients, or make healthcare decisions.**

## 🗂️ Project Structure

```text
Blood-Lab/
├── index.html   # Complete application: layout, styling, simulator logic, and quiz
└── README.md    # Project documentation
```

The app is intentionally lightweight: its HTML, CSS, and JavaScript are contained in a single file.

## 🛠️ Built With

- **HTML5** — Application structure
- **CSS3** — Responsive layout, themes, and animations
- **Vanilla JavaScript** — Simulator logic, navigation, visual updates, and quiz
- **Inline SVG** — Red-blood-cell and immune-interaction illustration

## 🤝 Contributing

Ideas, bug reports, and improvements are welcome.

1. Fork the repository.
2. Create a branch for your change.
3. Make your changes and test the app in a modern browser.
4. Open a pull request describing what changed and why.

For changes to scientific explanations or compatibility logic, include reliable references and keep the educational limitations clear.

## 📄 License

No license file is currently included in this repository. Unless a license is added, the default copyright rules apply; reuse and redistribution are not automatically permitted.

---

<p align="center">
  Made for curious minds exploring the science of blood. 🧪
  <br>
  <sub>Blood Lab · Educational simulator · Not for clinical use</sub>
</p>
