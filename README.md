# OHM VISUAL — Photography Portfolio

**Live Website:** [ohm-visual-portfolio.vercel.app](https://ohm-visual-portfolio.vercel.app)
---

## ที่มาของโปรเจกต์ (Motivation & Background)

โปรเจกต์นี้เริ่มต้นจากความตั้งใจที่ผมอยาก **ฝึกฝนทักษะพื้นฐาน Frontend (HTML, CSS, TypeScript)** อย่างจริงจัง โดยเฉพาะการฝึกแกะโครงสร้าง Layout จากภาพต้นแบบ และการใช้งาน Flexbox กับ CSS Grid ให้คล่องมือโดยไม่พึ่งพา Framework สำเร็จรูป

พอดีกับที่เพื่อนสนิทของผมเป็นช่างภาพ (**OHM VISUAL**) ผมเลยเกิดไอเดียว่าอยากสร้าง **เว็บไซต์ Portfolio จริง** ไว้ให้เพื่อนได้นำไปใช้โชว์ผลงานและรับงานลูกค้า:

1. **เก็บความต้องการจริง (Requirement Gathering):** ผมเริ่มจากการพูดคุยถามความต้องการของเพื่อนว่า ถ้ามีเว็บของตัวเองอยากได้โทนภาพประมาณไหน สไตล์ใด และต้องการให้มีข้อมูลอะไรบ้างในหน้าเว็บ (เช่น โชว์ภาพผลงาน, เรทราคา, อุปกรณ์กล้องที่ใช้, ช่องทางติดต่อทาง IG)
2. **ออกแบบ UI ต้นแบบ (Design with AI):** ผมนำความต้องการทั้งหมดไปให้ Claude AI ช่วยออกแบบภาพ Mockup สไตล์ Minimalist Editorial
3. **ลงมือสร้างด้วยตนเอง (Hand-crafted Implementation):** นำภาพ Mockup นั้นมาวิเคราะห์โครงสร้างกล่อง (Box Model) แล้วเริ่มลงมือเขียนโค้ด HTML, CSS และ TypeScript 


---

## สิ่งที่ได้ฝึกทำในโปรเจกต์นี้ (Practice & Core Features)
- **Mobile-First Responsive Layout:** ฝึกจัดหน้าจอด้วย Flexbox และ CSS Grid ให้ยืดหยุ่นทั้งบนมือถือและจอคอมพิวเตอร์โดยไม่ใช้ Framework สำเร็จรูป
- **ระบบดูรูปขยาย (Lightbox Modal):** ฝึกใช้ TypeScript ควบคุม DOM และถ่ายโอนข้อมูลรูปภาพ (`src`) เพื่อเปิดดูรูปเต็มจอ
- **เมนูมือถือ (Mobile Drawer):** ฝึกทำปุ่มแฮมเบอร์เกอร์เปิด-ปิดเมนู พร้อมคุมอนิเมชันนุ่มนวลด้วย CSS Transition
- **Semantic HTML & Typography:** ฝึกวางโครงสร้างแท็กให้ถูกต้องตามมาตรฐาน และทดลองจับคู่ฟอนต์ภาษาไทยกับอังกฤษ
- **Vite & Bun Workflow:** ฝึกการเซ็ตอัป Build Tool, การจัดการโฟลเดอร์ `public/` และการเตรียมโค้ดเพื่อ Deploy ขึ้น Vercel

---

## เทคโนโลยีที่ใช้ (Tech Stack)

- **Frontend:** Semantic HTML5, Vanilla CSS3 (CSS Grid & Flexbox), TypeScript
- **Runtime & Package Manager:** [Bun](https://bun.sh/)
- **Build Tool & Dev Server:** [Vite](https://vitejs.dev/)
- **Deployment:** [Vercel](https://vercel.com/)
- **AI Assistance:** Gemini Flash 3.8 — ใช้ช่วยทบทวนแนวคิด ตรวจสอบ code smells และอธิบาย mental models
---

## โครงสร้างโปรเจกต์ (Project Structure)

```text
├── public/          # Static Assets (โลโก้, รูปถ่าย)
├── src/
│   ├── style.css    # Design tokens, Typography, Responsive styles
│   └── main.ts      # Logic สำหรับเมนูมือถือ และ Lightbox Modal
├── index.html       # โครงสร้างหน้าเว็บ Semantic HTML5
└── package.json
```