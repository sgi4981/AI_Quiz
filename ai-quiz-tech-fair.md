# Test Your AI Knowledge — Tech Fair Webpage

**Organizer:** Code Ninjas Milton
**Event:** Tech Fair
**Audience:** Ages 9 and up (kids, parents, and anyone new to AI)
**Status:** Planning

---

## 1. Purpose

An interactive webpage for Tech Fair visitors that raises awareness of how AI is already part of everyday life. Visitors watch a short video, flip through fun facts, then take a quick quiz. The goal is for participants to leave knowing more about AI, and feeling able to explain it to friends and family who aren't familiar with it.

## 2. Goals

- Show real, everyday examples of AI (phones, streaming, maps, games).
- Keep it fun, short, and easy for a 9-year-old to use without help.
- Encourage people to share what they learned with others.
- Work well on a shared booth device (laptop or tablet) that many people use in a row.
- Do not makeup data or use fake data, be accurate and ask for confirmation providing citation about the fun facts being used.

## 3. Page Flow

```
Cover  →  Intro Video  →  Fun Facts (6–10)  →  Quiz (6–10 questions)  →  Results
                                                         ↑                  │
                                                         └── Try Again ─────┘
```

### 3.1 Cover Page
- **Logo:** image in CNMilton_logo_white outline.png file
- **centre frame** Continously plays the introductory video about AI from link https://www.youtube.com/watch?v=oJC8VIDSx_Q&t=65s
- **Button:** "Test Your AI Knowledge" at the bottom → goes to the Fun Facts Pages

### 3.3 Fun Facts Pages
- One fact per screen, 6–10 facts total.
- Show progress, e.g. "Fact 3 of 8".
- **Button:** "NEXT" → next fact; after the last fact, goes to the Quiz.

### 3.4 Quiz Pages
- One question per screen, 6–10 questions total.
- shuffle the questions in each try.
- Mix of **True/False** and **Multiple Choice**.
- Show progress, e.g. "Question 4 of 10".
- After answering, show whether it was right or wrong by highligting the answer in green if right, or yellow if wrong, with a short, friendly explanation, then a "NEXT" button.

### 3.5 Results Page
- Show the score as a number and percentage (e.g. "8 / 10 — 80%").
- **More than or equal to 80%:** confetti animation + celebration message.
- **Less than 50%:** encouraging message + "Try Again?" button that restarts the quiz.
- **50%–80%:** encouraging message like "Nice Try" + "Try Again?" button that restarts the quiz.
- A "Start Over" option to return to the Cover page for the next visitor.
- If no activity for 2 minutes then go to cover page

## 4. Draft Content

### 4.1 Fun Facts (draft — 10)

1. The term "artificial intelligence" was first used in 1955 by computer scientist John McCarthy.
2. Voice assistants like Siri and Alexa use AI to understand what you say and answer back.
3. When YouTube or Netflix suggests what to watch next, that's AI learning what you like.
4. Your email's spam filter uses AI to catch junk mail before you ever see it. 
5. Self-driving cars use AI to recognize stop signs, traffic lights, and people crossing the street.
6. AI helps doctors spot signs of illness in X-rays and other medical scans.
7. Face unlock on a phone uses AI to recognize your face.
8. AI learns from lots of examples, a bit like how you learn by practicing.
9. AI can make mistakes and sometimes sounds sure even when it's wrong, so always double-check important answers.

### 4.2 Quiz Questions (draft — 10)

| # | Type | Question | Options | Answer | Explanation |
|---|------|----------|---------|--------|-------------|
| 1 | True/False | AI is only found in robots. | True / False | **False** | AI is in phones, apps, games, maps, and more. |
| 2 | Multiple Choice | Which of these uses AI? | A) A light switch  B) A voice assistant like Alexa  C) A pencil | **B** | Voice assistants use AI to understand speech. |
| 3 | True/False | Video apps use AI to suggest what you might like to watch next. | True / False | **True** | They learn from what you've watched before. |
| 4 | Multiple Choice | How does AI usually learn? | A) From lots of examples  B) By sleeping  C) It already knows everything | **A** | AI finds patterns in large amounts of examples (data). |
| 5 | True/False | AI is always right. | True / False | **False** | AI can make mistakes, so it's smart to double-check. |
| 6 | Multiple Choice | What helps a self-driving car "see" the road? | A) Magic  B) AI with cameras and sensors  C) A steering wheel | **B** | AI uses camera and sensor data to recognize things around the car. |
| 7 | True/False | AI can help doctors find signs of illness in X-rays. | True / False | **True** | AI can spot patterns in medical images to help doctors. |
| 8 | Multiple Choice | Which of these is a good way to use AI safely? | A) Share your passwords with it  B) Check important answers with a trusted source  C) Believe everything it says | **B** | Always double-check and keep personal info private. |
| 9 | True/False | Your email spam filter uses AI. | True / False | **True** | It learns what junk mail looks like and filters it out. |
| 10 | Multiple Choice | In what year was the term "artificial intelligence" first used? | A) 1955  B) 1995  C) 2015 | **A** | John McCarthy used it in 1955. |

## 5. Design Guidelines

- **Kid-friendly:** big, readable fonts; large tap-friendly buttons; bright but not cluttered.
- **Simple language:** short sentences a 9-year-old can read on their own.
- **Booth-friendly:** works full-screen on a laptop or tablet; touch and mouse both work.
- **Quick:** whole experience takes about 5 minutes.
- **Accessible:** good color contrast, captions on the video, buttons usable by keyboard.
- **Branding:** Code Ninjas logo and colors.

## 6. Technical Notes

- Built as a simple web page with HTML, CSS, and JavaScript; no login or account needed.
- Devices used will be both laptop and tablets, so adjust accordingly.
- Should work **offline** at the fair (video and images stored locally, not streamed).
- **No personal data collected.** Scores are not saved or sent anywhere, which keeps things simple and safe for kids.
- Facts and questions stored in one easy-to-edit list so they can be updated without touching the rest of the code.
- Quiz resets automatically for the next visitor (optional idle timeout back to Cover page).
- Confetti via a lightweight library (e.g. canvas-confetti) or a small custom animation.

## 7. Assets

| Asset | Provided by | Status | Name |
|-------|-------------|--------|------|
| Logo image | Organizer | Provided |"Code_Ninjas_Logo_Stacked_Ful.png" |
| intro video | Organizer | Provided | https://www.youtube.com/watch?v=oJC8VIDSx_Q&t=65s |
| Brand colors / fonts | Organizer | Provided | Brand_page.png  |
| mascot | Organizer | Provided | RocketScientistNinja.png

## 8. Open Questions


## 9. Milestones

- [ ] Finalize facts and questions
- [ ] Build page flow (Cover → Video → Facts → Quiz → Results)
- [ ] Add scoring, confetti, and Try Again
- [ ] Test with a few kids aged 9+
- [ ] Test offline on the booth device
- [ ] Ready for the Tech Fair
