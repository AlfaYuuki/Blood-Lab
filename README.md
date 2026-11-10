# Blood Lab — Hematology Explorer

An interactive, browser-based educational experience about human circulation, blood groups, red-cell antigens, antibodies and blood components.

## Experience
- **Blood journey:** animated red-cell markers move through an eight-stage schematic route: systemic veins, right atrium, right ventricle, lung capillaries, pulmonary veins, left heart, aorta/systemic arteries and tissue capillaries.
- **Gas exchange:** oxygen and carbon-dioxide indicators change as the cell moves between lungs and body tissues.
- **Transfusion lab:** select donor and recipient ABO/Rh(D) groups, optionally model pre-existing anti-D, and step through cell entry, antibody encounter, antigen recognition and possible immune effects.
- **Blood groups:** profiles for all eight ABO/Rh(D) groups and a simplified red-cell teaching matrix.
- **Blood science:** red cells, white cells, plasma, platelets and immune memory.
- **Knowledge check:** five interactive questions.
- Responsive layout, light/dark theme toggle, speed control and reduced-motion support.

## Run
Open `index.html` in a modern browser. No build tools, package installation, framework or external JavaScript library is required. The app uses three local files: `index.html`, `app.css` and `app.js`.

## Important scientific limitations
This is a schematic educational model, not a physiological simulator or medical device. Vessel paths and cell positions are illustrative and not to scale. The transfusion lab models selected ABO and Rh(D) red-cell concepts only. ABO incompatibility can cause a severe acute immune reaction. Anti-D sensitization and subsequent anti-D-mediated effects are biologically distinct and may be delayed; they are not represented as instant ABO-style agglutination. Real transfusion safety depends on clinical assessment, antibody screening, laboratory crossmatching and professional protocols. Never use this app to make a real transfusion or healthcare decision.

## Project structure
```
Blood-Lab/
├── index.html   # Semantic application structure
├── app.css      # Complete responsive interface and animations
├── app.js       # Circulation, transfusion, navigation and quiz logic
└── README.md    # Documentation
```

## Technology
HTML5, CSS3, vanilla JavaScript and inline SVG. No build step or runtime dependency.

## License
No license file is included. Unless a license is added, default copyright rules apply.
