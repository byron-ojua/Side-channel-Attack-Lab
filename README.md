# 🕵️‍♂️ Mock Side-Channel Attack Lab

Welcome to the **Side-Channel Attack Lab**! In this interactive lab, you’ll explore how unintentional physical indicators—such as **timing** and **optical feedback**—can leak secret data from a system. You’ll not only exploit these vulnerabilities, but also learn how to patch them.

> 💡 This lab is fully browser-based and written in **HTML/CSS/JavaScript**. No setup or dependencies are required.

---

## 📂 Folder Structure

```
.
├── index.html                 # Home page (overview and links)
├── style.css                  # Shared styles
├── part-1/                    # Part 1: Optical (LED) Attack
│   ├── index.html
│   ├── index.js
│   ├── part1.js
│   └── style.css
├── part-2/                    # Part 2: Timing Attack
│   ├── index.html
│   ├── index.js
│   ├── part2.js
│   └── style.css
├── part-3/                    # Part 3: Patch the Vulnerabilities
│   ├── index.html             # Select which option to patch
│   ├── style.css
│   ├── option-1/              # Option 1: Patch Optical (LED) Attack
│   │   ├── index.html
│   │   ├── index.js
│   │   ├── option1.js
│   │   └── style.css
│   └── option-2/              # Option 2: Patch Timing Attack
│       ├── index.html
│       ├── index.js
│       ├── option2.js
│       └── style.css
```

---

## 🧪 Lab Overview

### 💡 Part 1 – Optical/LED Attack

Watch a visual LED indicator to determine if a digit is correct. The LED flashes red on a wrong digit and short-circuits early—allowing side-channel exploitation.
### 🔢 Part 2 – Timing Attack

Explore how response time can leak a 4-digit PIN. Use timing data to infer how many digits are correct and guess the PIN.

### 🔐 Part 3 – Patch the Vulnerability

Choose to patch either:

- **Option 1**: Fix the LED feedback vulnerability by removing short-circuit logic and evaluating the full PIN before giving feedback.
- **Option 2**: Fix the timing vulnerability by removing early exits and using constant-time comparison.

> 💥 Bonus: Patch **both** options for extra credit!

---

## ✅ Setup Instructions

1. Clone or download this project:

   ```bash
   git clone https://github.com/byron-ojua/Side-channel-Attack-Lab.git
   ```

2. Open the `index.html` file in your browser.

   > ⚠️ Make sure JavaScript is enabled.

3. Use the navigation to explore each part of the lab.

> 💻 Optional: Use VS Code with the “Live Server” extension for auto-refresh during testing.

---

## 🧠 Learning Objectives

- Understand how side-channel attacks (timing and optical) leak information.
- Practice exploiting vulnerabilities through observation and testing.
- Learn how to identify and patch insecure feedback logic in web apps.

---

## 📋 Attribution

Developed for CS499 – Introduction to Computer Science Education
Oregon State University

Parts of this lab were developed using Generative AI.
