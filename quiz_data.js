// Ngân hàng câu hỏi trắc nghiệm chi tiết 4 chương Vật lí 11 - Kết nối tri thức
const quizData = [
  // ==========================================
  // CHƯƠNG I: DAO ĐỘNG
  // ==========================================
  {
    id: "q-c1-01",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Dao động điều hòa",
    level: "Nhận biết",
    question: "Một vật dao động điều hòa theo phương trình $x = A \\cos(\\omega t + \\varphi)$. Đại lượng $\\omega$ được gọi là",
    options: [
      { id: "A", text: "Biên độ dao động." },
      { id: "B", text: "Pha ban đầu của dao động." },
      { id: "C", text: "Tần số góc của dao động." },
      { id: "D", text: "Chu kì dao động." }
    ],
    correct: "C",
    explanation: "Trong phương trình dao động điều hòa $x = A \\cos(\\omega t + \\varphi)$:\n- $A$: biên độ dao động ($A > 0$).\n- $\\omega$: tần số góc của dao động (rad/s, $\\omega > 0$).\n- $\\varphi$: pha ban đầu tại thời điểm $t = 0$ (rad).\n- $(\\omega t + \\varphi)$: pha của dao động tại thời điểm $t$ (rad)."
  },
  {
    id: "q-c1-02",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Vận tốc & Gia tốc",
    level: "Nhận biết",
    question: "Trong dao động điều hòa, vận tốc của vật biến thiên điều hòa",
    options: [
      { id: "A", text: "Cùng pha với li độ." },
      { id: "B", text: "Ngược pha với li độ." },
      { id: "C", text: "Sớm pha $\\frac{\\pi}{2}$ so với li độ." },
      { id: "D", text: "Trễ pha $\\frac{\\pi}{2}$ so với li độ." }
    ],
    correct: "C",
    explanation: "Phương trình li độ: $x = A\\cos(\\omega t + \\varphi)$.\nPhương trình vận tốc: $v = x' = \\omega A\\cos\\left(\\omega t + \\varphi + \\frac{\\pi}{2}\\right)$.\nDo đó, vận tốc sớm pha $\\frac{\\pi}{2}$ rad (vuông pha) so với li độ."
  },
  {
    id: "q-c1-03",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Vận tốc & Gia tốc",
    level: "Nhận biết",
    question: "Vectơ gia tốc của một chất điểm dao động điều hòa luôn",
    options: [
      { id: "A", text: "Cùng chiều với vectơ vận tốc." },
      { id: "B", text: "Hướng về vị trí cân bằng và có độ lớn tỉ lệ với độ lớn của li độ." },
      { id: "C", text: "Không đổi cả về hướng lẫn độ lớn." },
      { id: "D", text: "Hướng ra xa vị trí cân bằng." }
    ],
    correct: "B",
    explanation: "Gia tốc có biểu thức: $a = -\\omega^2 x$. Dấu trừ cho biết vectơ gia tốc luôn hướng ngược hướng với vectơ li độ, tức là luôn hướng về vị trí cân bằng (VTCB). Độ lớn $|a| = \\omega^2 |x|$ tỉ lệ thuận với độ lớn li độ."
  },
  {
    id: "q-c1-04",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Mô tả dao động",
    level: "Thông hiểu",
    question: "Một vật dao động điều hòa với phương trình $x = 5 \\cos(4\\pi t - \\frac{\\pi}{3})$ (cm, s). Tốc độ cực đại của vật là",
    options: [
      { id: "A", text: "$5\\pi$ cm/s." },
      { id: "B", text: "$20\\pi$ cm/s." },
      { id: "C", text: "$10\\pi$ cm/s." },
      { id: "D", text: "$4\\pi$ cm/s." }
    ],
    correct: "B",
    explanation: "Từ phương trình ta có biên độ $A = 5$ cm, tần số góc $\\omega = 4\\pi$ rad/s.\nTốc độ cực đại của vật khi qua vị trí cân bằng là:\n$$v_{\\max} = \\omega A = 4\\pi \\cdot 5 = 20\\pi \\text{ cm/s}$$\nChọn B."
  },
  {
    id: "q-c1-05",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Con lắc lò xo",
    level: "Thông hiểu",
    question: "Một con lắc lò xo gồm vật nhỏ có khối lượng $m = 200$ g và lò xo có độ cứng $k = 50$ N/m. Lấy $\\pi^2 \\approx 10$. Chu kì dao động riêng của con lắc là",
    options: [
      { id: "A", text: "$0{,}4$ s." },
      { id: "B", text: "$0{,}2$ s." },
      { id: "C", text: "$2{,}5$ s." },
      { id: "D", text: "$1{,}25$ s." }
    ],
    correct: "A",
    explanation: "Đổi đơn vị: $m = 200\\text{ g} = 0{,}2\\text{ kg}$.\nChu kì dao động của con lắc lò xo là:\n$$T = 2\\pi \\sqrt{\\frac{m}{k}} = 2\\pi \\sqrt{\\frac{0{,}2}{50}} = 2\\pi \\sqrt{\\frac{1}{250}} = \\frac{2\\pi}{5\\sqrt{10}} = \\frac{2}{5} = 0{,}4 \\text{ s}$$ (với $\\pi \\approx \\sqrt{10}$).\nChọn A."
  },
  {
    id: "q-c1-06",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Năng lượng dao động",
    level: "Thông hiểu",
    question: "Trong dao động điều hòa của một vật, động năng và thế năng biến thiên tuần hoàn với tần số góc $\\omega'$ bằng",
    options: [
      { id: "A", text: "$\\omega' = \\omega$." },
      { id: "B", text: "$\\omega' = 2\\omega$." },
      { id: "C", text: "$\\omega' = \\frac{\\omega}{2}$." },
      { id: "D", text: "$\\omega' = 4\\omega$." }
    ],
    correct: "B",
    explanation: "Nếu li độ dao động với tần số góc $\\omega$, chu kì $T$, tần số $f$ thì động năng và thế năng biến thiên tuần hoàn với:\n- Tần số góc: $\\omega' = 2\\omega$\n- Tần số: $f' = 2f$\n- Chu kì: $T' = \\frac{T}{2}$."
  },
  {
    id: "q-c1-07",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Hệ thức độc lập",
    level: "Vận dụng",
    question: "Một chất điểm dao động điều hòa với biên độ $A = 5$ cm. Khi vật có li độ $x = 3$ cm thì vận tốc có độ lớn $|v| = 40$ cm/s. Tần số góc dao động của chất điểm là",
    options: [
      { id: "A", text: "$5$ rad/s." },
      { id: "B", text: "$8$ rad/s." },
      { id: "C", text: "$10$ rad/s." },
      { id: "D", text: "$20$ rad/s." }
    ],
    correct: "C",
    explanation: "Áp dụng hệ thức độc lập thời gian giữa $x$ và $v$:\n$$x^2 + \\frac{v^2}{\\omega^2} = A^2 \\implies \\frac{v^2}{\\omega^2} = A^2 - x^2 = 5^2 - 3^2 = 16$$\n$$\\implies \\frac{40^2}{\\omega^2} = 16 \\implies \\omega^2 = \\frac{1600}{16} = 100 \\implies \\omega = 10 \\text{ rad/s}$$\nChọn C."
  },
  {
    id: "q-c1-08",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Năng lượng dao động",
    level: "Vận dụng",
    question: "Một vật dao động điều hòa với biên độ $A$. Vị trí mà động năng của vật bằng 3 lần thế năng ($W_đ = 3 W_t$) có li độ thỏa mãn",
    options: [
      { id: "A", text: "$x = \\pm \\frac{A}{2}$." },
      { id: "B", text: "$x = \\pm \\frac{A\\sqrt{3}}{2}$." },
      { id: "C", text: "$x = \\pm \\frac{A}{\\sqrt{2}}$." },
      { id: "D", text: "$x = \\pm \\frac{A}{4}$." }
    ],
    correct: "A",
    explanation: "Cơ năng: $W = W_đ + W_t$.\nKhi $W_đ = 3 W_t \\implies W = 3W_t + W_t = 4 W_t$.\nTa có: $\\frac{1}{2} k A^2 = 4 \\cdot \\left(\\frac{1}{2} k x^2\\right) \\implies A^2 = 4 x^2 \\implies x = \\pm \\frac{A}{2}$.\nChọn A."
  },
  {
    id: "q-c1-09",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Cộng hưởng cơ",
    level: "Nhận biết",
    question: "Hiện tượng cộng hưởng xảy ra khi",
    options: [
      { id: "A", text: "Tần số của lực cưỡng bức bằng tần số dao động riêng của hệ." },
      { id: "B", text: "Biên độ của ngoại lực cưỡng bức rất lớn." },
      { id: "C", text: "Ma sát của môi trường rất lớn." },
      { id: "D", text: "Tần số của lực cưỡng bức lớn hơn rất nhiều tần số dao động riêng." }
    ],
    correct: "A",
    explanation: "Hiện tượng biên độ dao động cưỡng bức tăng đến giá trị cực đại khi tần số của lực cưỡng bức $f_{\\text{cb}}$ tiến đến bằng tần số dao động riêng $f_0$ của hệ được gọi là hiện tượng cộng hưởng cơ."
  },
  {
    id: "q-c1-10",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Con lắc đơn",
    level: "Vận dụng",
    question: "Tại cùng một nơi, con lắc đơn chiều dài $l_1$ dao động với chu kì $T_1 = 1{,}2$ s, con lắc đơn chiều dài $l_2$ dao động với chu kì $T_2 = 1{,}6$ s. Con lắc đơn có chiều dài $l = l_1 + l_2$ sẽ dao động với chu kì là",
    options: [
      { id: "A", text: "$2{,}8$ s." },
      { id: "B", text: "$2{,}0$ s." },
      { id: "C", text: "$1{,}4$ s." },
      { id: "D", text: "$0{,}96$ s." }
    ],
    correct: "B",
    explanation: "Ta có $T = 2\\pi \\sqrt{\\frac{l}{g}} \\implies T^2 \\sim l$.\nDo $l = l_1 + l_2$ nên:\n$$T = \\sqrt{T_1^2 + T_2^2} = \\sqrt{1{,}2^2 + 1{,}6^2} = \\sqrt{1{,}44 + 2{,}56} = \\sqrt{4} = 2{,}0 \\text{ s}$$\nChọn B."
  },
  {
    id: "q-c1-11",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Dao động tắt dần",
    level: "Nhận biết",
    question: "Nguyên nhân chính làm cho dao động của con lắc bị tắt dần trong không khí là do",
    options: [
      { id: "A", text: "Trọng lực tác dụng lên vật." },
      { id: "B", text: "Lực cản và ma sát của môi trường làm tiêu hao cơ năng của vật thành nhiệt năng." },
      { id: "C", text: "Dây treo con lắc bị dãn dần theo thời gian." },
      { id: "D", text: "Gia tốc trọng trường thay đổi liên tục." }
    ],
    correct: "B",
    explanation: "Dao động tắt dần là dao động có biên độ và cơ năng giảm dần theo thời gian. Nguyên nhân trực tiếp là do lực cản (ma sát) của môi trường tiêu hao cơ năng biến đổi thành nhiệt năng."
  },
  {
    id: "q-c1-12",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Lực kéo về",
    level: "Thông hiểu",
    question: "Trong dao động điều hòa của con lắc lò xo nằm ngang, lực kéo về tác dụng lên vật",
    options: [
      { id: "A", text: "Có độ lớn không đổi và luôn hướng về vị trí biên." },
      { id: "B", text: "Luôn hướng về vị trí cân bằng và có độ lớn cực đại tại hai vị trí biên." },
      { id: "C", text: "Có độ lớn cực đại khi vật đi qua vị trí cân bằng." },
      { id: "D", text: "Luôn cùng chiều với vectơ vận tốc của vật." }
    ],
    correct: "B",
    explanation: "Lực kéo về có biểu thức $F_{kv} = -kx = -m\\omega^2 x$. Vectơ lực kéo về luôn hướng về vị trí cân bằng. Độ lớn $|F_{kv}| = k|x|$, đạt cực đại tại vị trí biên ($x = \\pm A \\implies F_{\\max} = kA$) và bằng 0 tại vị trí cân bằng ($x = 0$)."
  },
  {
    id: "q-c1-13",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Con lắc lò xo",
    level: "Thông hiểu",
    question: "Một con lắc lò xo treo thẳng đứng, ở vị trí cân bằng lò xo dãn một đoạn $\\Delta l_0 = 4$ cm. Lấy $g = 10\\text{ m/s}^2 \\approx \\pi^2\\text{ m/s}^2$. Chu kì dao động riêng của con lắc là",
    options: [
      { id: "A", text: "$0{,}4$ s." },
      { id: "B", text: "$0{,}2$ s." },
      { id: "C", text: "$0{,}8$ s." },
      { id: "D", text: "$0{,}1$ s." }
    ],
    correct: "A",
    explanation: "Đổi đơn vị: $\\Delta l_0 = 4\\text{ cm} = 0{,}04\\text{ m}$.\nChu kì con lắc lò xo treo thẳng đứng:\n$$T = 2\\pi \\sqrt{\\frac{\\Delta l_0}{g}} = 2\\pi \\sqrt{\\frac{0{,}04}{\\pi^2}} = 2 \\cdot 0{,}2 = 0{,}4 \\text{ s}$$\nChọn A."
  },
  {
    id: "q-c1-14",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Năng lượng dao động",
    level: "Nhận biết",
    question: "Phát biểu nào sau đây về năng lượng trong dao động điều hòa là **sai**?",
    options: [
      { id: "A", text: "Động năng đạt giá trị cực đại khi vật đi qua vị trí cân bằng." },
      { id: "B", text: "Thế năng đạt giá trị cực đại khi vật ở vị trí biên." },
      { id: "C", text: "Cơ năng biến thiên tuần hoàn với tần số gấp đôi tần số dao động." },
      { id: "D", text: "Tổng động năng và thế năng tại mọi thời điểm luôn không đổi." }
    ],
    correct: "C",
    explanation: "Phát biểu C sai vì **cơ năng** là đại lượng bảo toàn ($W = \\frac{1}{2}kA^2 = \\text{hằng số}$), không biến thiên theo thời gian. Chỉ có động năng và thế năng mới biến thiên tuần hoàn với tần số gấp đôi ($f' = 2f$)."
  },
  {
    id: "q-c1-15",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Thời gian dao động",
    level: "Vận dụng",
    question: "Một chất điểm dao động điều hòa với chu kì $T$. Khoảng thời gian ngắn nhất để vật đi từ vị trí biên dương $x = +A$ đến vị trí có li độ $x = -\\frac{A}{2}$ là",
    options: [
      { id: "A", text: "$\\frac{T}{3}$." },
      { id: "B", text: "$\\frac{T}{4}$." },
      { id: "C", text: "$\\frac{T}{6}$." },
      { id: "D", text: "$\\frac{5T}{12}$." }
    ],
    correct: "A",
    explanation: "Sử dụng vòng tròn lượng giác hoặc sơ đồ thời gian:\n- Thời gian từ $+A$ đến $0$ (VTCB) là: $\\Delta t_1 = \\frac{T}{4}$.\n- Thời gian từ $0$ đến $-\\frac{A}{2}$ là: $\\Delta t_2 = \\frac{T}{12}$.\nKhoảng thời gian ngắn nhất:\n$$\\Delta t = \\frac{T}{4} + \\frac{T}{12} = \\frac{4T}{12} = \\frac{T}{3}$$\nChọn A."
  },
  {
    id: "q-c1-sa01",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Phương trình li độ",
    level: "Thông hiểu",
    type: "short_answer",
    question: "Một chất điểm dao động điều hòa theo phương trình $x = 4\\cos\\left(2\\pi t - \\frac{\\pi}{3}\\right)$ (cm). Li độ của chất điểm tại thời điểm $t = 0{,}5\\text{ s}$ là bao nhiêu xentimét (cm)?",
    correctValue: -2,
    unit: "cm",
    tolerance: 0.05,
    explanation: "Thay $t = 0{,}5\\text{ s}$ vào phương trình li độ:\n$$x = 4\\cos\\left(2\\pi \\cdot 0{,}5 - \\frac{\\pi}{3}\\right) = 4\\cos\\left(\\pi - \\frac{\\pi}{3}\\right) = 4\\cos\\left(\\frac{2\\pi}{3}\\right) = 4 \\cdot \\left(-\\frac{1}{2}\\right) = -2\\text{ cm}$$\nĐáp số: **-2** (hoặc **-2,0**)."
  },
  {
    id: "q-c1-sa02",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Con lắc lò xo",
    level: "Thông hiểu",
    type: "short_answer",
    question: "Một con lắc lò xo gồm vật nặng $m = 400\\text{ g}$ và lò xo có độ cứng $k = 100\\text{ N/m}$. Lấy $\\pi^2 \\approx 10$. Tính chu kì dao động riêng của con lắc lò xo theo đơn vị giây (s).",
    correctValue: 0.4,
    unit: "s",
    tolerance: 0.02,
    explanation: "Đổi đơn vị: $m = 400\\text{ g} = 0{,}4\\text{ kg}$.\nChu kì dao động của con lắc lò xo:\n$$T = 2\\pi \\sqrt{\\frac{m}{k}} = 2\\pi \\sqrt{\\frac{0{,}4}{100}} = 2\\pi \\frac{\\sqrt{4}}{10\\sqrt{10}} = \\frac{4\\pi}{10\\pi} = 0{,}4\\text{ s}$$\nĐáp số: **0.4** (hoặc **0,4**)."
  },
  {
    id: "q-c1-sa03",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Gia tốc dao động",
    level: "Thông hiểu",
    type: "short_answer",
    question: "Một vật dao động điều hòa với tần số góc $\\omega = 10\\text{ rad/s}$. Tại thời điểm vật có li độ $x = 2\\text{ cm} = 0{,}02\\text{ m}$, gia tốc của vật có giá trị bằng bao nhiêu mét trên giây bình phương ($\\text{m/s}^2$)?",
    correctValue: -2,
    unit: "m/s²",
    tolerance: 0.05,
    explanation: "Gia tốc liên hệ với li độ theo biểu thức:\n$$a = -\\omega^2 x = -10^2 \\cdot 0{,}02 = -100 \\cdot 0{,}02 = -2\\text{ m/s}^2$$\n(Lưu ý: Gia tốc mang giá trị âm vì li độ dương, vectơ gia tốc hướng về vị trí cân bằng).\nĐáp số: **-2**."
  },
  {
    id: "q-c1-sa04",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Năng lượng dao động",
    level: "Vận dụng",
    type: "short_answer",
    question: "Một con lắc lò xo dao động điều hòa với biên độ $A = 0{,}05\\text{ m}$, độ cứng của lò xo $k = 40\\text{ N/m}$. Cơ năng của con lắc bằng bao nhiêu Jun (J)?",
    correctValue: 0.05,
    unit: "J",
    tolerance: 0.005,
    explanation: "Cơ năng của con lắc lò xo:\n$$W = \\frac{1}{2} k A^2 = \\frac{1}{2} \\cdot 40 \\cdot (0{,}05)^2 = 20 \\cdot 0{,}0025 = 0{,}05\\text{ J}$$\nĐáp số: **0.05** (hoặc **0,05**)."
  },

  // ==========================================
  // CHƯƠNG II: SÓNG
  // ==========================================
  {
    id: "q-c2-01",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Mô tả sóng",
    level: "Nhận biết",
    question: "Bước sóng là",
    options: [
      { id: "A", text: "Khoảng cách giữa hai điểm dao động cùng pha trên cùng một phương truyền sóng." },
      { id: "B", text: "Quãng đường mà sóng truyền đi được trong một chu kì." },
      { id: "C", text: "Khoảng cách giữa hai đỉnh sóng bất kì trên mặt nước." },
      { id: "D", text: "Quãng đường mà sóng truyền đi được trong 1 giây." }
    ],
    correct: "B",
    explanation: "Định nghĩa chuẩn SGK: Bước sóng $\\lambda$ là quãng đường sóng truyền đi được trong một chu kì dao động ($\\lambda = v \\cdot T = \\frac{v}{f}$). Đồng thời, bước sóng cũng là khoảng cách giữa hai điểm *gần nhau nhất* trên cùng một phương truyền sóng dao động cùng pha."
  },
  {
    id: "q-c2-02",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Mô tả sóng",
    level: "Nhận biết",
    question: "Sóng cơ **không** truyền được trong môi trường nào dưới đây?",
    options: [
      { id: "A", text: "Chất rắn." },
      { id: "B", text: "Chất lỏng." },
      { id: "C", text: "Chân không." },
      { id: "D", text: "Chất khí." }
    ],
    correct: "C",
    explanation: "Sóng cơ là sự lan truyền dao động cơ học trong môi trường vật chất đàn hồi (rắn, lỏng, khí). Vì chân không không chứa các phần tử vật chất đàn hồi nên sóng cơ không thể truyền qua được chân không (khác với sóng điện từ)."
  },
  {
    id: "q-c2-03",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Đặc trưng của sóng",
    level: "Thông hiểu",
    question: "Một sóng cơ hình sin có tần số $f = 50$ Hz lan truyền với tốc độ $v = 20$ m/s. Bước sóng của sóng này là",
    options: [
      { id: "A", text: "$40$ cm." },
      { id: "B", text: "$2{,}5$ m." },
      { id: "C", text: "$1000$ m." },
      { id: "D", text: "$4$ m." }
    ],
    correct: "A",
    explanation: "Áp dụng công thức tính bước sóng:\n$$\\lambda = \\frac{v}{f} = \\frac{20}{50} = 0{,}4 \\text{ m} = 40 \\text{ cm}$$\nChọn A."
  },
  {
    id: "q-c2-04",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Giao thoa sóng cơ",
    level: "Thông hiểu",
    question: "Trong thí nghiệm giao thoa sóng nước với hai nguồn kết hợp cùng pha $S_1$ và $S_2$, những điểm trong vùng giao thoa có biên độ dao động cực đại thỏa mãn hiệu đường đi",
    options: [
      { id: "A", text: "$d_2 - d_1 = k\\lambda$ với $k \\in \\mathbb{Z}$." },
      { id: "B", text: "$d_2 - d_1 = (k + 0{,}5)\\lambda$ với $k \\in \\mathbb{Z}$." },
      { id: "C", text: "$d_2 - d_1 = (2k + 1)\\frac{\\lambda}{4}$ với $k \\in \\mathbb{Z}$." },
      { id: "D", text: "$d_2 - d_1 = k\\frac{\\lambda}{2}$ với $k \\in \\mathbb{Z}$." }
    ],
    correct: "A",
    explanation: "Với hai nguồn kết hợp cùng pha:\n- Cực đại giao thoa: $d_2 - d_1 = k\\lambda$ ($k = 0, \\pm 1, \\pm 2, \\dots$).\n- Cực tiểu giao thoa: $d_2 - d_1 = (k + 0{,}5)\\lambda$ ($k = 0, \\pm 1, \\pm 2, \\dots$)."
  },
  {
    id: "q-c2-05",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Sóng dừng",
    level: "Thông hiểu",
    question: "Một sợi dây đàn hồi dài $L = 1{,}2$ m có hai đầu cố định. Khi xuất hiện sóng dừng ổn định, trên dây quan sát được 3 bụng sóng. Bước sóng của sóng dừng là",
    options: [
      { id: "A", text: "$0{,}4$ m." },
      { id: "B", text: "$0{,}8$ m." },
      { id: "C", text: "$1{,}2$ m." },
      { id: "D", text: "$2{,}4$ m." }
    ],
    correct: "B",
    explanation: "Dây hai đầu cố định có điều kiện sóng dừng: $L = k \\frac{\\lambda}{2}$, với $k$ là số bụng sóng.\nỞ đây $k = 3$ bụng sóng:\n$$1{,}2 = 3 \\cdot \\frac{\\lambda}{2} \\implies \\lambda = \\frac{1{,}2 \\cdot 2}{3} = 0{,}8 \\text{ m}$$\nChọn B."
  },
  {
    id: "q-c2-06",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Giao thoa ánh sáng",
    level: "Thông hiểu",
    question: "Trong thí nghiệm Young về giao thoa ánh sáng, khoảng cách hai khe $a = 1$ mm, khoảng cách từ mặt phẳng chứa hai khe đến màn $D = 2$ m, ánh sáng đơn sắc có bước sóng $\\lambda = 0{,}5\\,\\mu$m. Khoảng vân giao thoa $i$ trên màn là",
    options: [
      { id: "A", text: "$1{,}0$ mm." },
      { id: "B", text: "$0{,}5$ mm." },
      { id: "C", text: "$2{,}0$ mm." },
      { id: "D", text: "$0{,}25$ mm." }
    ],
    correct: "A",
    explanation: "Công thức tính khoảng vân:\n$$i = \\frac{\\lambda D}{a}$$\nMẹo đơn vị chuẩn: $\\lambda$ tính bằng $\\mu$m, $D$ tính bằng m, $a$ tính bằng mm thì khoảng vân $i$ ra đơn vị mm:\n$$i = \\frac{0{,}5 \\cdot 2}{1} = 1{,}0 \\text{ mm}$$\nChọn A."
  },
  {
    id: "q-c2-07",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Giao thoa ánh sáng",
    level: "Vận dụng",
    question: "Trong thí nghiệm Young với ánh sáng có bước sóng $\\lambda$, khoảng vân đo được là $i = 1{,}2$ mm. Khoảng cách giữa vân sáng bậc 2 và vân sáng bậc 5 ở cùng một phía so với vân sáng trung tâm là",
    options: [
      { id: "A", text: "$2{,}4$ mm." },
      { id: "B", text: "$3{,}6$ mm." },
      { id: "C", text: "$6{,}0$ mm." },
      { id: "D", text: "$8{,}4$ mm." }
    ],
    correct: "B",
    explanation: "Tọa độ vân sáng bậc 2: $x_{s2} = 2i$.\nTọa độ vân sáng bậc 5: $x_{s5} = 5i$.\nVì hai vân sáng ở cùng một phía so với vân trung tâm nên khoảng cách giữa chúng là:\n$$\\Delta x = x_{s5} - x_{s2} = 5i - 2i = 3i = 3 \\cdot 1{,}2 = 3{,}6 \\text{ mm}$$\nChọn B."
  },
  {
    id: "q-c2-08",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Thang sóng điện từ",
    level: "Nhận biết",
    question: "Dãy bức xạ nào dưới đây được sắp xếp theo thứ tự **tần số tăng dần** (bước sóng giảm dần)?",
    options: [
      { id: "A", text: "Tia hồng ngoại, ánh sáng nhìn thấy, tia tử ngoại, tia X." },
      { id: "B", text: "Tia X, tia tử ngoại, ánh sáng nhìn thấy, tia hồng ngoại." },
      { id: "C", text: "Sóng vô tuyến, tia X, tia tử ngoại, ánh sáng nhìn thấy." },
      { id: "D", text: "Tia tử ngoại, ánh sáng nhìn thấy, tia hồng ngoại, sóng vô tuyến." }
    ],
    correct: "A",
    explanation: "Thang sóng điện từ theo thứ tự bước sóng giảm dần (tần số tăng dần):\nSóng vô tuyến $\\to$ Tia hồng ngoại $\\to$ Ánh sáng nhìn thấy $\\to$ Tia tử ngoại $\\to$ Tia X $\\to$ Tia gamma.\nDo đó dãy có tần số tăng dần đúng là: Hồng ngoại $\\to$ Nhìn thấy $\\to$ Tử ngoại $\\to$ Tia X."
  },
  {
    id: "q-c2-09",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Sóng dừng",
    level: "Thông hiểu",
    question: "Trên một sợi dây đang có sóng dừng, khoảng cách giữa hai nút sóng kề nhau (hoặc hai bụng sóng kề nhau) bằng",
    options: [
      { id: "A", text: "Một bước sóng $\\lambda$." },
      { id: "B", text: "Một nửa bước sóng $\\frac{\\lambda}{2}$." },
      { id: "C", text: "Một phần tư bước sóng $\\frac{\\lambda}{4}$." },
      { id: "D", text: "Hai bước sóng $2\\lambda$." }
    ],
    correct: "B",
    explanation: "Đặc điểm của sóng dừng:\n- Khoảng cách giữa hai nút sóng (hoặc hai bụng sóng) liên tiếp là $\\frac{\\lambda}{2}$.\n- Khoảng cách giữa một nút và một bụng kề nhau là $\\frac{\\lambda}{4}$."
  },
  {
    id: "q-c2-10",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Mô tả sóng",
    level: "Thông hiểu",
    question: "Khi một sóng truyền từ môi trường không khí vào môi trường nước thì",
    options: [
      { id: "A", text: "Tần số sóng không đổi, bước sóng tăng." },
      { id: "B", text: "Tần số sóng thay đổi, bước sóng không đổi." },
      { id: "C", text: "Cả tần số và tốc độ sóng đều giảm." },
      { id: "D", text: "Tần số không đổi, tốc độ và bước sóng đều thay đổi." }
    ],
    correct: "D",
    explanation: "Khi sóng truyền qua các môi trường khác nhau:\n- Tần số $f$ (và chu kì $T$) là đặc trưng của nguồn phát nên **không bao giờ thay đổi**.\n- Tốc độ truyền sóng $v$ phụ thuộc vào tính chất đàn hồi và mật độ môi trường nên thay đổi $\\implies$ Bước sóng $\\lambda = \\frac{v}{f}$ cũng thay đổi tương ứng."
  },
  {
    id: "q-c2-11",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Mô tả sóng",
    level: "Nhận biết",
    question: "Sóng ngang là sóng có phương dao động của các phần tử môi trường",
    options: [
      { id: "A", text: "Trùng với phương truyền sóng." },
      { id: "B", text: "Vuông góc với phương truyền sóng." },
      { id: "C", text: "Luôn nằm theo phương thẳng đứng." },
      { id: "D", text: "Luôn nằm theo phương nằm ngang." }
    ],
    correct: "B",
    explanation: "Định nghĩa: Sóng ngang là sóng trong đó các phần tử của môi trường dao động theo phương vuông góc với phương truyền sóng (sóng ngang truyền được trong chất rắn và bề mặt chất lỏng)."
  },
  {
    id: "q-c2-12",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Mô tả sóng",
    level: "Thông hiểu",
    question: "Hai điểm $M$ và $N$ nằm trên cùng một phương truyền sóng cách nhau một khoảng $d$. Độ lệch pha dao động giữa hai điểm này được tính bằng công thức",
    options: [
      { id: "A", text: "$\\Delta \\varphi = \\frac{2\\pi d}{\\lambda}$." },
      { id: "B", text: "$\\Delta \\varphi = \\frac{\\pi d}{\\lambda}$." },
      { id: "C", text: "$\\Delta \\varphi = \\frac{2\\pi \\lambda}{d}$." },
      { id: "D", text: "$\\Delta \\varphi = \\frac{\\pi \\lambda}{d}$." }
    ],
    correct: "A",
    explanation: "Độ lệch pha dao động giữa hai điểm cách nhau một khoảng $d$ trên cùng một phương truyền sóng là:\n$$\\Delta \\varphi = \\frac{2\\pi d}{\\lambda} = \\frac{2\\pi d f}{v}$$\nChọn A."
  },
  {
    id: "q-c2-13",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Sóng dừng",
    level: "Thông hiểu",
    question: "Một sợi dây đàn hồi có một đầu cố định, một đầu tự do. Khi trên dây có sóng dừng ổn định với 3 bụng sóng thì số nút sóng quan sát được trên dây là",
    options: [
      { id: "A", text: "2 nút." },
      { id: "B", text: "3 nút." },
      { id: "C", text: "4 nút." },
      { id: "D", text: "5 nút." }
    ],
    correct: "B",
    explanation: "Đối với sợi dây có một đầu cố định, một đầu tự do:\nSố bụng sóng = Số nút sóng = $k + 1$.\nĐề bài cho có 3 bụng sóng $\\implies$ số nút sóng cũng bằng 3 nút (đầu cố định là 1 nút, đầu tự do là 1 bụng).\nChọn B."
  },
  {
    id: "q-c2-14",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Giao thoa ánh sáng",
    level: "Vận dụng",
    question: "Trong thí nghiệm Young về giao thoa ánh sáng trong không khí, khoảng vân đo được là $i = 1{,}2$ mm. Nếu đặt toàn bộ thí nghiệm vào trong nước có chiết suất $n = \\frac{4}{3}$ thì khoảng vân mới $i'$ sẽ bằng",
    options: [
      { id: "A", text: "$1{,}6$ mm." },
      { id: "B", text: "$0{,}9$ mm." },
      { id: "C", text: "$0{,}8$ mm." },
      { id: "D", text: "$1{,}2$ mm." }
    ],
    correct: "B",
    explanation: "Khi truyền vào môi trường có chiết suất $n$, tốc độ ánh sáng giảm $v = \\frac{c}{n} \\implies$ bước sóng giảm: $\\lambda' = \\frac{\\lambda}{n}$.\nDo đó khoảng vân mới là:\n$$i' = \\frac{\\lambda' D}{a} = \\frac{i}{n} = \\frac{1{,}2}{4/3} = 1{,}2 \\cdot \\frac{3}{4} = 0{,}9 \\text{ mm}$$\nChọn B."
  },
  {
    id: "q-c2-15",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Thang sóng điện từ",
    level: "Nhận biết",
    question: "Tia tử ngoại (UV) có đặc điểm và tính chất nổi bật nào dưới đây?",
    options: [
      { id: "A", text: "Không có tác dụng sinh học, không thể diệt khuẩn." },
      { id: "B", text: "Có tác dụng nhiệt rất mạnh và dễ dàng truyền qua tấm thủy tinh dày." },
      { id: "C", text: "Có tác dụng diệt khuẩn, làm ion hóa không khí và bị thủy tinh hấp thụ mạnh." },
      { id: "D", text: "Có bước sóng lớn hơn bước sóng của ánh sáng nhìn thấy." }
    ],
    correct: "C",
    explanation: "Tia tử ngoại có bước sóng ngắn hơn ánh sáng tím ($< 0{,}38\\,\\mu\\text{m}$). Tính chất nổi bật: bị thủy tinh và nước hấp thụ rất mạnh, làm ion hóa không khí, kích thích phát quang, có tác dụng sinh học cao (hủy diệt tế bào, diệt khuẩn)."
  },
  {
    id: "q-c2-sa01",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Mô tả sóng",
    level: "Thông hiểu",
    type: "short_answer",
    question: "Một sóng cơ hình sin lan truyền với tốc độ $v = 15\\text{ m/s}$ và tần số $f = 50\\text{ Hz}$. Bước sóng của sóng này bằng bao nhiêu mét (m)?",
    correctValue: 0.3,
    unit: "m",
    tolerance: 0.02,
    explanation: "Bước sóng của sóng cơ:\n$$\\lambda = \\frac{v}{f} = \\frac{15}{50} = 0{,}3\\text{ m}$$\nĐáp số: **0.3** (hoặc **0,3**)."
  },
  {
    id: "q-c2-sa02",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Giao thoa ánh sáng",
    level: "Thông hiểu",
    type: "short_answer",
    question: "Trong thí nghiệm Young về giao thoa ánh sáng, khoảng cách giữa hai khe là $a = 1\\text{ mm}$, khoảng cách từ hai khe đến màn quan sát là $D = 1{,}5\\text{ m}$. Ánh sáng đơn sắc có bước sóng $\\lambda = 0{,}6\\,\\mu\\text{m}$. Khoảng vân $i$ đo được trên màn bằng bao nhiêu milimét (mm)?",
    correctValue: 0.9,
    unit: "mm",
    tolerance: 0.02,
    explanation: "Khoảng vân giao thoa:\n$$i = \\frac{\\lambda D}{a} = \\frac{0{,}6\\,(\\mu\\text{m}) \\cdot 1{,}5\\,(\\text{m})}{1\\,(\\text{mm})} = 0{,}9\\text{ mm}$$\nĐáp số: **0.9** (hoặc **0,9**)."
  },
  {
    id: "q-c2-sa03",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Sóng dừng",
    level: "Thông hiểu",
    type: "short_answer",
    question: "Một sợi dây đàn hồi có chiều dài $L$, hai đầu cố định. Khi trên dây xảy ra sóng dừng với 4 bụng sóng, người ta đo được bước sóng $\\lambda = 40\\text{ cm}$. Chiều dài $L$ của sợi dây bằng bao nhiêu xentimét (cm)?",
    correctValue: 80,
    unit: "cm",
    tolerance: 0.5,
    explanation: "Điều kiện sóng dừng trên dây hai đầu cố định:\n$$L = k \\frac{\\lambda}{2} = 4 \\cdot \\frac{40}{2} = 80\\text{ cm}$$\nĐáp số: **80**."
  },
  {
    id: "q-c2-sa04",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Giao thoa ánh sáng",
    level: "Vận dụng",
    type: "short_answer",
    question: "Trong thí nghiệm Young với khoảng vân $i = 1{,}2\\text{ mm}$, khoảng cách từ vân sáng trung tâm đến vân tối thứ 3 có độ lớn bằng bao nhiêu milimét (mm)?",
    correctValue: 3,
    unit: "mm",
    tolerance: 0.05,
    explanation: "Vị trí vân tối thứ 3 ứng với $k = 2$ (hoặc $3 - 0{,}5 = 2{,}5$):\n$$x_{t3} = \\left(3 - \\frac{1}{2}\\right) i = 2{,}5 \\cdot 1{,}2 = 3{,}0\\text{ mm}$$\nĐáp số: **3** (hoặc **3.0**)."
  },

  // ==========================================
  // CHƯƠNG III: ĐIỆN TRƯỜNG
  // ==========================================
  {
    id: "q-c3-01",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Định luật Coulomb",
    level: "Nhận biết",
    question: "Độ lớn lực tương tác tĩnh điện giữa hai điện tích điểm đặt trong chân không tỉ lệ nghịch với",
    options: [
      { id: "A", text: "Khoảng cách giữa hai điện tích." },
      { id: "B", text: "Bình phương khoảng cách giữa hai điện tích." },
      { id: "C", text: "Tích độ lớn của hai điện tích." },
      { id: "D", text: "Căn bậc hai khoảng cách giữa hai điện tích." }
    ],
    correct: "B",
    explanation: "Theo định luật Coulomb: $F = k \\frac{|q_1 q_2|}{r^2}$. Lực tương tác tĩnh điện tỉ lệ thuận với tích độ lớn hai điện tích và tỉ lệ nghịch với bình phương khoảng cách giữa chúng ($r^2$)."
  },
  {
    id: "q-c3-02",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Định luật Coulomb",
    level: "Thông hiểu",
    question: "Hai điện tích điểm $q_1 = 2 \\cdot 10^{-8}$ C và $q_2 = -2 \\cdot 10^{-8}$ C đặt cách nhau $3$ cm trong chân không. Lực tương tác giữa chúng là",
    options: [
      { id: "A", text: "Lực hút với độ lớn $4 \\cdot 10^{-3}$ N." },
      { id: "B", text: "Lực đẩy với độ lớn $4 \\cdot 10^{-3}$ N." },
      { id: "C", text: "Lực hút với độ lớn $1{,}2 \\cdot 10^{-4}$ N." },
      { id: "D", text: "Lực đẩy với độ lớn $1{,}2 \\cdot 10^{-4}$ N." }
    ],
    correct: "A",
    explanation: "- Vì $q_1 > 0$ và $q_2 < 0$ (trái dấu) nên chúng **hút nhau**.\n- Đổi $r = 3\\text{ cm} = 0{,}03\\text{ m}$.\n- Độ lớn lực tương tác:\n$$F = 9 \\cdot 10^9 \\cdot \\frac{|2 \\cdot 10^{-8} \\cdot (-2 \\cdot 10^{-8})|}{(0{,}03)^2} = 9 \\cdot 10^9 \\cdot \\frac{4 \\cdot 10^{-16}}{9 \\cdot 10^{-4}} = 4 \\cdot 10^{-3} \\text{ N}$$\nChọn A."
  },
  {
    id: "q-c3-03",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Điện trường & Lực điện",
    level: "Nhận biết",
    question: "Đơn vị đo cường độ điện trường trong hệ SI là",
    options: [
      { id: "A", text: "Cu-lông (C)." },
      { id: "B", text: "Vôn (V)." },
      { id: "C", text: "Vôn trên mét (V/m)." },
      { id: "D", text: "Jun (J)." }
    ],
    correct: "C",
    explanation: "Cường độ điện trường có đơn vị là Vôn trên mét (V/m) hoặc Newton trên Cu-lông (N/C), xuất phát từ hệ thức $E = \\frac{F}{|q|}$ hoặc $E = \\frac{U}{d}$."
  },
  {
    id: "q-c3-04",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Điện trường & Lực điện",
    level: "Thông hiểu",
    question: "Một điện tích thử $q = -2\\,\\mu$C đặt tại một điểm trong điện trường đều có cường độ $E = 1000$ V/m. Lực điện trường tác dụng lên điện tích có độ lớn và hướng là",
    options: [
      { id: "A", text: "$F = 2 \\cdot 10^{-3}$ N, cùng hướng với vectơ $\\vec{E}$." },
      { id: "B", text: "$F = 2 \\cdot 10^{-3}$ N, ngược hướng với vectơ $\\vec{E}$." },
      { id: "C", text: "$F = 0{,}5$ N, ngược hướng với vectơ $\\vec{E}$." },
      { id: "D", text: "$F = 2 \\cdot 10^3$ N, cùng hướng với vectơ $\\vec{E}$." }
    ],
    correct: "B",
    explanation: "Ta có $\\vec{F} = q \\vec{E}$.\n- Vì $q = -2\\,\\mu\\text{C} = -2 \\cdot 10^{-6}\\text{ C} < 0$ nên vectơ $\\vec{F}$ ngược hướng với $\\vec{E}$.\n- Độ lớn: $F = |q| E = 2 \\cdot 10^{-6} \\cdot 1000 = 2 \\cdot 10^{-3}$ N.\nChọn B."
  },
  {
    id: "q-c3-05",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Công của lực điện",
    level: "Nhận biết",
    question: "Công của lực điện trường tác dụng lên một điện tích dịch chuyển giữa hai điểm trong một điện trường tĩnh",
    options: [
      { id: "A", text: "Chỉ phụ thuộc vào hình dạng của đường đi." },
      { id: "B", text: "Không phụ thuộc vào hình dạng đường đi, chỉ phụ thuộc vị trí điểm đầu và điểm cuối." },
      { id: "C", text: "Luôn luôn bằng 0 trong mọi trường hợp." },
      { id: "D", text: "Tỉ lệ nghịch với độ lớn điện tích dịch chuyển." }
    ],
    correct: "B",
    explanation: "Trường tĩnh điện là một trường thế. Công của lực điện làm dịch chuyển điện tích $q$ từ $M$ đến $N$ tuân theo $A_{MN} = q(V_M - V_N)$, hoàn toàn không phụ thuộc vào hình dạng đường đi mà chỉ phụ thuộc vào tọa độ vị trí điểm đầu $M$ và điểm cuối $N$."
  },
  {
    id: "q-c3-06",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Hiệu điện thế & Điện thế",
    level: "Thông hiểu",
    question: "Hiệu điện thế giữa hai bản kim loại phẳng đặt song song, cách nhau $d = 2$ cm là $U = 100$ V. Cường độ điện trường đều giữa hai bản là",
    options: [
      { id: "A", text: "$50$ V/m." },
      { id: "B", text: "$200$ V/m." },
      { id: "C", text: "$5000$ V/m." },
      { id: "D", text: "$2000$ V/m." }
    ],
    correct: "C",
    explanation: "Đổi $d = 2\\text{ cm} = 0{,}02\\text{ m}$.\nÁp dụng mối liên hệ giữa $E$ và $U$ trong điện trường đều:\n$$E = \\frac{U}{d} = \\frac{100}{0{,}02} = 5000 \\text{ V/m}$$\nChọn C."
  },
  {
    id: "q-c3-07",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Tụ điện",
    level: "Nhận biết",
    question: "Điện dung của tụ điện đặc trưng cho",
    options: [
      { id: "A", text: "Khả năng cản trở dòng điện của tụ." },
      { id: "B", text: "Khả năng tích điện của tụ ở một hiệu điện thế nhất định." },
      { id: "C", text: "Năng lượng cực đại mà tụ có thể hấp thụ từ nguồn phát xạ." },
      { id: "D", text: "Khả năng biến đổi điện năng thành nhiệt năng." }
    ],
    correct: "B",
    explanation: "Điện dung $C$ của tụ điện là đại lượng đặc trưng cho khả năng tích điện của tụ điện ở một hiệu điện thế nhất định: $C = \\frac{Q}{U}$, đơn vị là Fara (F). Giá trị $C$ phụ thuộc vào cấu tạo hình học và chất điện môi của tụ, không phụ thuộc vào $Q$ và $U$."
  },
  {
    id: "q-c3-08",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Năng lượng tụ điện",
    level: "Vận dụng",
    question: "Một tụ điện có điện dung $C = 20\\,\\mu$F được tích điện dưới hiệu điện thế $U = 50$ V. Năng lượng điện trường dự trữ bên trong tụ điện là",
    options: [
      { id: "A", text: "$0{,}025$ J." },
      { id: "B", text: "$0{,}05$ J." },
      { id: "C", text: "$25$ J." },
      { id: "D", text: "$1000$ J." }
    ],
    correct: "A",
    explanation: "Đổi đơn vị: $C = 20\\,\\mu\\text{F} = 20 \\cdot 10^{-6}\\text{ F}$.\nNăng lượng điện trường dự trữ trong tụ:\n$$W = \\frac{1}{2} C U^2 = \\frac{1}{2} \\cdot (20 \\cdot 10^{-6}) \\cdot 50^2 = 10^{-5} \\cdot 2500 = 0{,}025 \\text{ J} = 25 \\text{ mJ}$$\nChọn A."
  },
  {
    id: "q-c3-09",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Ghép tụ điện",
    level: "Thông hiểu",
    question: "Hai tụ điện có điện dung $C_1 = 3\\,\\mu$F và $C_2 = 6\\,\\mu$F được mắc nối tiếp với nhau thành một bộ tụ. Điện dung tương đương của bộ tụ này là",
    options: [
      { id: "A", text: "$9\\,\\mu$F." },
      { id: "B", text: "$2\\,\\mu$F." },
      { id: "C", text: "$4{,}5\\,\\mu$F." },
      { id: "D", text: "$18\\,\\mu$F." }
    ],
    correct: "B",
    explanation: "Khi hai tụ ghép nối tiếp:\n$$\\frac{1}{C_b} = \\frac{1}{C_1} + \\frac{1}{C_2} \\implies C_b = \\frac{C_1 \\cdot C_2}{C_1 + C_2} = \\frac{3 \\cdot 6}{3 + 6} = \\frac{18}{9} = 2 \\,\\mu\\text{F}$$\nChọn B."
  },
  {
    id: "q-c3-10",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Công của lực điện",
    level: "Vận dụng",
    question: "Một hạt electron mang điện tích $q = -1{,}6 \\cdot 10^{-19}$ C di chuyển từ điểm M có điện thế $V_M = 500$ V đến điểm N có điện thế $V_N = 200$ V. Công của lực điện thực hiện lên electron là",
    options: [
      { id: "A", text: "$+4{,}8 \\cdot 10^{-17}$ J." },
      { id: "B", text: "$-4{,}8 \\cdot 10^{-17}$ J." },
      { id: "C", text: "$-1{,}12 \\cdot 10^{-16}$ J." },
      { id: "D", text: "$+1{,}12 \\cdot 10^{-16}$ J." }
    ],
    correct: "B",
    explanation: "Hiệu điện thế giữa M và N là:\n$$U_{MN} = V_M - V_N = 500 - 200 = 300 \\text{ V}$$\nCông của lực điện làm dịch chuyển electron là:\n$$A_{MN} = q \\cdot U_{MN} = (-1{,}6 \\cdot 10^{-19}) \\cdot 300 = -4{,}8 \\cdot 10^{-17} \\text{ J}$$\n(Dấu âm cho biết lực điện trường sinh công cản trở chuyển động của electron).\nChọn B."
  },
  {
    id: "q-c3-11",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Điện trường & Đường sức điện",
    level: "Nhận biết",
    question: "Phát biểu nào sau đây là **sai** khi nói về tính chất của các đường sức điện trường tĩnh?",
    options: [
      { id: "A", text: "Qua mỗi điểm trong điện trường có một và chỉ một đường sức điện." },
      { id: "B", text: "Đường sức điện là những đường cong kín không có điểm đầu và điểm cuối." },
      { id: "C", text: "Đường sức điện xuất phát từ điện tích dương (hoặc ở vô cùng) và kết thúc ở điện tích âm (hoặc ở vô cùng)." },
      { id: "D", text: "Nơi nào điện trường mạnh thì các đường sức điện vẽ dày đặc hơn." }
    ],
    correct: "B",
    explanation: "Phát biểu B sai vì đường sức của điện trường tĩnh là đường hở (xuất phát từ điện tích dương và kết thúc ở điện tích âm). Chỉ có đường sức của từ trường hoặc điện trường xoáy mới là đường cong kín."
  },
  {
    id: "q-c3-12",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Cường độ điện trường",
    level: "Thông hiểu",
    question: "Cường độ điện trường do một điện tích điểm $Q$ gây ra tại một điểm cách nó một khoảng $r$ trong chân không có độ lớn là $E$. Nếu khoảng cách từ điểm khảo sát đến điện tích tăng lên gấp 3 lần thì cường độ điện trường sẽ",
    options: [
      { id: "A", text: "Tăng lên 3 lần." },
      { id: "B", text: "Giảm đi 3 lần." },
      { id: "C", text: "Giảm đi 9 lần." },
      { id: "D", text: "Tăng lên 9 lần." }
    ],
    correct: "C",
    explanation: "Cường độ điện trường của điện tích điểm: $E = k \\frac{|Q|}{r^2}$.\nVì $E$ tỉ lệ nghịch với bình phương khoảng cách ($r^2$), nên khi khoảng cách tăng 3 lần ($r' = 3r$) thì cường độ điện trường giảm đi $3^2 = 9$ lần:\n$$E' = \\frac{E}{3^2} = \\frac{E}{9}$$\nChọn C."
  },
  {
    id: "q-c3-13",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Chuyển động trong điện trường",
    level: "Thông hiểu",
    question: "Một hạt electron được bắn vào trong một điện trường đều giữa hai bản tụ điện phẳng theo phương vuông góc với các đường sức điện trường. Bỏ qua tác dụng của trọng lực, quỹ đạo chuyển động của electron trong điện trường là",
    options: [
      { id: "A", text: "Một đường thẳng cùng hướng với đường sức điện." },
      { id: "B", text: "Một phần của đường cong parabol." },
      { id: "C", text: "Một đường tròn." },
      { id: "D", text: "Một đường elip quanh tâm điện trường." }
    ],
    correct: "B",
    explanation: "Tương tự như chuyển động ném ngang trong trọng lực:\n- Theo phương vuông góc đường sức (trục Ox): electron chuyển động thẳng đều với vận tốc ban đầu $v_0$.\n- Theo phương song song đường sức (trục Oy): electron chịu lực điện không đổi $F = eE$, chuyển động nhanh dần đều với gia tốc $a = \\frac{eE}{m}$.\nPhương trình quỹ đạo có dạng parabol: $y = \\frac{a}{2v_0^2} x^2$.\nChọn B."
  },
  {
    id: "q-c3-14",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Ghép tụ điện",
    level: "Thông hiểu",
    question: "Hai tụ điện có điện dung $C_1 = 4\\,\\mu$F và $C_2 = 6\\,\\mu$F được mắc song song với nhau. Điện dung tương đương của bộ tụ là",
    options: [
      { id: "A", text: "$10\\,\\mu$F." },
      { id: "B", text: "$2{,}4\\,\\mu$F." },
      { id: "C", text: "$2\\,\\mu$F." },
      { id: "D", text: "$24\\,\\mu$F." }
    ],
    correct: "A",
    explanation: "Khi ghép hai tụ điện song song:\n$$C_b = C_1 + C_2 = 4 + 6 = 10 \\,\\mu\\text{F}$$\nChọn A."
  },
  {
    id: "q-c3-15",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Tụ điện phẳng",
    level: "Vận dụng",
    question: "Một tụ điện phẳng có điện dung $C = 100$ pF. Nếu tăng khoảng cách giữa hai bản tụ lên gấp đôi và giữ nguyên các yếu tố khác thì điện dung của tụ điện sẽ",
    options: [
      { id: "A", text: "Tăng lên thành $200$ pF." },
      { id: "B", text: "Giảm đi còn $50$ pF." },
      { id: "C", text: "Không thay đổi và vẫn bằng $100$ pF." },
      { id: "D", text: "Giảm đi còn $25$ pF." }
    ],
    correct: "B",
    explanation: "Điện dung của tụ điện phẳng: $C = \\frac{\\varepsilon S}{4\\pi k d}$.\nĐiện dung tỉ lệ nghịch với khoảng cách $d$ giữa hai bản tụ. Khi khoảng cách tăng gấp đôi ($d' = 2d$) thì điện dung giảm một nửa:\n$$C' = \\frac{C}{2} = \\frac{100}{2} = 50 \\text{ pF}$$\nChọn B."
  },
  {
    id: "q-c3-sa01",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Điện trường đều",
    level: "Thông hiểu",
    type: "short_answer",
    question: "Hiệu điện thế giữa hai bản kim loại phẳng song song tích điện trái dấu cách nhau $d = 4\\text{ cm} = 0{,}04\\text{ m}$ là $U = 120\\text{ V}$. Cường độ điện trường đều giữa hai bản có độ lớn bằng bao nhiêu Vôn trên mét (V/m)?",
    correctValue: 3000,
    unit: "V/m",
    tolerance: 10,
    explanation: "Cường độ điện trường giữa hai bản kim loại:\n$$E = \\frac{U}{d} = \\frac{120}{0{,}04} = 3000\\text{ V/m}$$\nĐáp số: **3000**."
  },
  {
    id: "q-c3-sa02",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Công của lực điện",
    level: "Thông hiểu",
    type: "short_answer",
    question: "Một điện tích điểm âm $q = -2\\,\\mu\\text{C}$ dịch chuyển từ điểm $M$ có điện thế $V_M = 100\\text{ V}$ đến điểm $N$ có điện thế $V_N = 40\\text{ V}$. Công của lực điện trường tác dụng lên điện tích bằng bao nhiêu micrôjun ($\\mu\\text{J}$)?",
    correctValue: -120,
    unit: "μJ",
    tolerance: 1,
    explanation: "Hiệu điện thế giữa $M$ và $N$:\n$$U_{MN} = V_M - V_N = 100 - 40 = 60\\text{ V}$$\nCông của lực điện:\n$$A_{MN} = q \\cdot U_{MN} = (-2\\,\\mu\\text{C}) \\cdot 60\\text{ V} = -120\\,\\mu\\text{J}$$\n(Lưu ý: Lực điện trường sinh công cản nên giá trị mang dấu âm).\nĐáp số: **-120**."
  },
  {
    id: "q-c3-sa03",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Ghép tụ điện",
    level: "Thông hiểu",
    type: "short_answer",
    question: "Hai tụ điện có điện dung $C_1 = 2\\,\\mu\\text{F}$ và $C_2 = 3\\,\\mu\\text{F}$ được ghép song song với nhau. Điện dung của bộ tụ bằng bao nhiêu micrôfara ($\\mu\\text{F}$)?",
    correctValue: 5,
    unit: "μF",
    tolerance: 0.05,
    explanation: "Điện dung tương đương của bộ tụ ghép song song:\n$$C_b = C_1 + C_2 = 2 + 3 = 5\\,\\mu\\text{F}$$\nĐáp số: **5**."
  },
  {
    id: "q-c3-sa04",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Năng lượng điện trường",
    level: "Vận dụng",
    type: "short_answer",
    question: "Một tụ điện có điện dung $C = 10\\,\\mu\\text{F}$ được tích điện đến hiệu điện thế $U = 20\\text{ V}$. Năng lượng điện trường dự trữ trong tụ điện bằng bao nhiêu milijun (mJ)?",
    correctValue: 2,
    unit: "mJ",
    tolerance: 0.05,
    explanation: "Năng lượng điện trường dự trữ trong tụ điện:\n$$W = \\frac{1}{2} C U^2 = \\frac{1}{2} \\cdot (10 \\cdot 10^{-6}\\text{ F}) \\cdot 20^2 = 5 \\cdot 10^{-6} \\cdot 400 = 2 \\cdot 10^{-3}\\text{ J} = 2\\text{ mJ}$$\nĐáp số: **2**."
  },

  // ==========================================
  // CHƯƠNG IV: DÒNG ĐIỆN KHÔNG ĐỔI
  // ==========================================
  {
    id: "q-c4-01",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Cường độ dòng điện",
    level: "Nhận biết",
    question: "Dòng điện trong kim loại là dòng dịch chuyển có hướng của",
    options: [
      { id: "A", text: "Các ion dương theo chiều điện trường." },
      { id: "B", text: "Các ion âm ngược chiều điện trường." },
      { id: "C", text: "Các electron tự do ngược chiều điện trường." },
      { id: "D", text: "Các electron và ion dương tự do." }
    ],
    correct: "C",
    explanation: "Bản chất dòng điện trong kim loại là dòng chuyển dời có hướng của các electron tự do dưới tác dụng của điện trường. Vì electron mang điện tích âm nên chúng chuyển động ngược chiều vectơ cường độ điện trường."
  },
  {
    id: "q-c4-02",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Cường độ dòng điện",
    level: "Thông hiểu",
    question: "Cường độ dòng điện không đổi chạy qua một dây dẫn kim loại là $I = 2$ A. Điện lượng chuyển qua tiết diện thẳng của dây dẫn đó trong thời gian 1 phút là",
    options: [
      { id: "A", text: "$2$ C." },
      { id: "B", text: "$60$ C." },
      { id: "C", text: "$120$ C." },
      { id: "D", text: "$30$ C." }
    ],
    correct: "C",
    explanation: "Đổi thời gian: $t = 1\\text{ phút} = 60\\text{ s}$.\nĐiện lượng chuyển qua tiết diện thẳng:\n$$q = I \\cdot t = 2 \\cdot 60 = 120 \\text{ C}$$\nChọn C."
  },
  {
    id: "q-c4-03",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Nguồn điện",
    level: "Nhận biết",
    question: "Suất điện động của một nguồn điện là đại lượng đặc trưng cho",
    options: [
      { id: "A", text: "Khả năng thực hiện công của các lực lạ bên trong nguồn điện." },
      { id: "B", text: "Khả năng cản trở dòng điện của nguồn." },
      { id: "C", text: "Tác dụng phát quang của dòng điện." },
      { id: "D", text: "Khả năng tích trữ điện tích của nguồn." }
    ],
    correct: "A",
    explanation: "Suất điện động $\\mathcal{E}$ của nguồn điện là đại lượng đặc trưng cho khả năng thực hiện công của lực lạ bên trong nguồn điện, được đo bằng thương số giữa công $A$ của lực lạ khi làm dịch chuyển điện tích $q$ dương bên trong nguồn và độ lớn điện tích đó: $\\mathcal{E} = \\frac{A}{q}$ (đơn vị Vôn)."
  },
  {
    id: "q-c4-04",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Điện trở dây dẫn",
    level: "Thông hiểu",
    question: "Một sợi dây dẫn đồng chất hình trụ có điện trở $R = 8\\,\\Omega$. Nếu kéo sợi dây dài ra gấp đôi sao cho thể tích không đổi (tiết diện giảm một nửa) thì điện trở mới của dây là",
    options: [
      { id: "A", text: "$16\\,\\Omega$." },
      { id: "B", text: "$32\\,\\Omega$." },
      { id: "C", text: "$4\\,\\Omega$." },
      { id: "D", text: "$8\\,\\Omega$." }
    ],
    correct: "B",
    explanation: "Điện trở của dây: $R = \\rho \\frac{l}{S}$.\nKhi chiều dài tăng gấp đôi ($l' = 2l$) và thể tích không đổi $\\implies$ tiết diện giảm 2 lần ($S' = \\frac{S}{2}$).\nĐiện trở mới của dây:\n$$R' = \\rho \\frac{l'}{S'} = \\rho \\frac{2l}{S/2} = 4 \\left(\\rho \\frac{l}{S}\\right) = 4R = 4 \\cdot 8 = 32 \\,\\Omega$$\nChọn B."
  },
  {
    id: "q-c4-05",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Định luật Ôm toàn mạch",
    level: "Thông hiểu",
    question: "Cho mạch điện kín gồm nguồn điện có suất điện động $\\mathcal{E} = 12$ V, điện trở trong $r = 1\\,\\Omega$ mắc với điện trở mạch ngoài $R_N = 5\\,\\Omega$. Cường độ dòng điện trong mạch là",
    options: [
      { id: "A", text: "$2$ A." },
      { id: "B", text: "$2{,}4$ A." },
      { id: "C", text: "$12$ A." },
      { id: "D", text: "$6$ A." }
    ],
    correct: "A",
    explanation: "Áp dụng định luật Ôm cho toàn mạch:\n$$I = \\frac{\\mathcal{E}}{R_N + r} = \\frac{12}{5 + 1} = \\frac{12}{6} = 2 \\text{ A}$$\nChọn A."
  },
  {
    id: "q-c4-06",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Định luật Ôm toàn mạch",
    level: "Thông hiểu",
    question: "Với mạch điện ở câu trên ($\\mathcal{E} = 12$ V, $r = 1\\,\\Omega$, $R_N = 5\\,\\Omega$, $I = 2$ A), hiệu điện thế giữa hai cực của nguồn điện (mạch ngoài) $U_N$ bằng",
    options: [
      { id: "A", text: "$12$ V." },
      { id: "B", text: "$10$ V." },
      { id: "C", text: "$2$ V." },
      { id: "D", text: "$5$ V." }
    ],
    correct: "B",
    explanation: "Hiệu điện thế hai cực nguồn điện:\n$$U_N = I \\cdot R_N = 2 \\cdot 5 = 10 \\text{ V}$$\nHoặc: $U_N = \\mathcal{E} - I \\cdot r = 12 - 2 \\cdot 1 = 10$ V.\nChọn B."
  },
  {
    id: "q-c4-07",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Hiện tượng đoản mạch",
    level: "Nhận biết",
    question: "Hiện tượng đoản mạch (ngắn mạch) xảy ra đối với nguồn điện khi",
    options: [
      { id: "A", text: "Mạch ngoài bị ngắt (hở mạch)." },
      { id: "B", text: "Điện trở mạch ngoài rất nhỏ xấp xỉ bằng $0$ ($R_N \\approx 0$)." },
      { id: "C", text: "Điện trở trong của nguồn rất lớn ($r \\to \\infty$)." },
      { id: "D", text: "Nguồn điện nối với tụ điện có điện dung vô cùng lớn." }
    ],
    correct: "B",
    explanation: "Khi hai cực của nguồn điện được nối trực tiếp bằng một dây dẫn có điện trở rất nhỏ ($R_N \\to 0$), dòng điện trong mạch đạt giá trị rất lớn $I_{\\text{đm}} = \\frac{\\mathcal{E}}{r}$. Hiện tượng này gọi là đoản mạch, tỏa ra lượng nhiệt lớn dễ gây hỏng nguồn điện và cháy nổ."
  },
  {
    id: "q-c4-08",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Năng lượng & Công suất điện",
    level: "Thông hiểu",
    question: "Một bóng đèn có ghi $220$ V – $100$ W được mắc vào mạng điện đúng hiệu điện thế định mức $220$ V. Điện năng tiêu thụ của bóng đèn trong thời gian $5$ giờ là",
    options: [
      { id: "A", text: "$0{,}5$ kW·h." },
      { id: "B", text: "$500$ kW·h." },
      { id: "C", text: "$1{,}8 \\cdot 10^5$ J." },
      { id: "D", text: "$20$ kW·h." }
    ],
    correct: "A",
    explanation: "Công suất bóng đèn: $\\mathcal{P} = 100\\text{ W} = 0{,}1\\text{ kW}$.\nThời gian: $t = 5\\text{ h}$.\nĐiện năng tiêu thụ:\n$$A = \\mathcal{P} \\cdot t = 0{,}1 \\cdot 5 = 0{,}5 \\text{ kW}\\cdot\\text{h} = 0{,}5 \\cdot 3{,}6 \\cdot 10^6 \\text{ J} = 1{,}8 \\cdot 10^6 \\text{ J}$$\nChọn A."
  },
  {
    id: "q-c4-09",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Công suất mạch ngoài cực đại",
    level: "Vận dụng",
    question: "Một nguồn điện có suất điện động $\\mathcal{E} = 6$ V và điện trở trong $r = 2\\,\\Omega$ nối với mạch ngoài là một biến trở $R_N$. Để công suất tiêu thụ ở mạch ngoài đạt giá trị cực đại thì giá trị của biến trở $R_N$ và công suất cực đại $\\mathcal{P}_{N\\max}$ lần lượt là",
    options: [
      { id: "A", text: "$R_N = 2\\,\\Omega$ và $\\mathcal{P}_{N\\max} = 4{,}5$ W." },
      { id: "B", text: "$R_N = 4\\,\\Omega$ và $\\mathcal{P}_{N\\max} = 9$ W." },
      { id: "C", text: "$R_N = 1\\,\\Omega$ và $\\mathcal{P}_{N\\max} = 4{,}5$ W." },
      { id: "D", text: "$R_N = 2\\,\\Omega$ và $\\mathcal{P}_{N\\max} = 18$ W." }
    ],
    correct: "A",
    explanation: "Công suất tiêu thụ mạch ngoài: $\\mathcal{P}_N = I^2 R_N = \\frac{\\mathcal{E}^2 R_N}{(R_N + r)^2}$.\nTheo bất đẳng thức Cauchy (Cô-si), $(R_N + r)^2 = \\left(\\sqrt{R_N} + \\frac{r}{\\sqrt{R_N}}\\right)^2 \\ge 4r$, dấu bằng xảy ra khi:\n$$R_N = r = 2\\,\\Omega$$\nKhi đó công suất cực đại là:\n$$\\mathcal{P}_{N\\max} = \\frac{\\mathcal{E}^2}{4r} = \\frac{6^2}{4 \\cdot 2} = \\frac{36}{8} = 4{,}5 \\text{ W}$$\nChọn A."
  },
  {
    id: "q-c4-10",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Hiệu suất nguồn điện",
    level: "Thông hiểu",
    question: "Một nguồn điện có điện trở trong $r = 2\\,\\Omega$ cung cấp điện cho một mạch ngoài có điện trở $R_N = 8\\,\\Omega$. Hiệu suất của nguồn điện là",
    options: [
      { id: "A", text: "$75\\%$." },
      { id: "B", text: "$80\\%$." },
      { id: "C", text: "$20\\%$." },
      { id: "D", text: "$25\\%$." }
    ],
    correct: "B",
    explanation: "Hiệu suất của nguồn điện được tính bằng tỉ số giữa công có ích (tiêu thụ ở mạch ngoài) và công toàn phần:\n$$H = \\frac{U_N}{\\mathcal{E}} = \\frac{I \\cdot R_N}{I(R_N + r)} = \\frac{R_N}{R_N + r} = \\frac{8}{8 + 2} = \\frac{8}{10} = 80\\%$$\nChọn B."
  },
  {
    id: "q-c4-11",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Dòng điện trong kim loại",
    level: "Nhận biết",
    question: "Quy ước chiều của dòng điện trong mạch điện là chiều",
    options: [
      { id: "A", text: "Dịch chuyển có hướng của các điện tích dương." },
      { id: "B", text: "Dịch chuyển có hướng của các electron tự do." },
      { id: "C", text: "Dịch chuyển có hướng của các ion âm." },
      { id: "D", text: "Từ cực âm sang cực dương ở mạch ngoài." }
    ],
    correct: "A",
    explanation: "Theo quy ước lịch sử: Chiều của dòng điện là chiều chuyển động có hướng của các hạt mang điện tích dương (ở mạch ngoài đi từ cực dương sang cực âm của nguồn điện). Trong kim loại, các electron mang điện tích âm nên chiều chuyển động của chúng ngược với chiều dòng điện."
  },
  {
    id: "q-c4-12",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Định luật Ôm toàn mạch",
    level: "Thông hiểu",
    question: "Hiệu điện thế giữa hai cực của nguồn điện (suất điện động $\\mathcal{E}$, điện trở trong $r$) khi mạch ngoài để hở ($I = 0$) có giá trị bằng",
    options: [
      { id: "A", text: "Bằng 0." },
      { id: "B", text: "Bằng đúng suất điện động $\\mathcal{E}$ của nguồn." },
      { id: "C", text: "Lớn hơn suất điện động $\\mathcal{E}$." },
      { id: "D", text: "Bằng điện trở trong $r$ của nguồn." }
    ],
    correct: "B",
    explanation: "Hiệu điện thế hai cực nguồn điện tuân theo công thức: $U_N = \\mathcal{E} - I \\cdot r$.\nKhi mạch ngoài hở, không có dòng điện chạy qua ($I = 0$), do đó $U_N = \\mathcal{E} - 0 = \\mathcal{E}$. Vì vậy vôn kế có điện trở rất lớn mắc vào hai cực nguồn điện khi mạch hở sẽ đo được đúng suất điện động của nguồn."
  },
  {
    id: "q-c4-13",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Định luật Joule - Lenz",
    level: "Nhận biết",
    question: "Theo định luật Joule – Lenz, nhiệt lượng tỏa ra trên một vật dẫn thuần trở tỉ lệ thuận với",
    options: [
      { id: "A", text: "Cường độ dòng điện chạy qua vật dẫn." },
      { id: "B", text: "Bình phương cường độ dòng điện chạy qua vật dẫn." },
      { id: "C", text: "Căn bậc hai của cường độ dòng điện chạy qua vật dẫn." },
      { id: "D", text: "Tỉ số giữa hiệu điện thế và cường độ dòng điện." }
    ],
    correct: "B",
    explanation: "Định luật Joule – Lenz: $Q = I^2 R t$. Nhiệt lượng tỏa ra trên dây dẫn tỉ lệ thuận với điện trở của vật dẫn, bình phương cường độ dòng điện và thời gian dòng điện chạy qua."
  },
  {
    id: "q-c4-14",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Ghép nguồn điện",
    level: "Thông hiểu",
    question: "Có $n$ nguồn điện giống nhau, mỗi nguồn có suất điện động $\\mathcal{E}$ và điện trở trong $r$ được mắc nối tiếp với nhau. Suất điện động và điện trở trong của bộ nguồn là",
    options: [
      { id: "A", text: "$\\mathcal{E}_b = n\\mathcal{E}$ và $r_b = nr$." },
      { id: "B", text: "$\\mathcal{E}_b = \\mathcal{E}$ và $r_b = \\frac{r}{n}$." },
      { id: "C", text: "$\\mathcal{E}_b = n\\mathcal{E}$ và $r_b = \\frac{r}{n}$." },
      { id: "D", text: "$\\mathcal{E}_b = \\mathcal{E}$ và $r_b = nr$." }
    ],
    correct: "A",
    explanation: "Khi ghép $n$ nguồn điện giống nhau nối tiếp:\n- Suất điện động bộ nguồn: $\\mathcal{E}_b = \\mathcal{E}_1 + \\mathcal{E}_2 + \\dots + \\mathcal{E}_n = n\\mathcal{E}$.\n- Điện trở trong bộ nguồn: $r_b = r_1 + r_2 + \\dots + r_n = nr$.\nChọn A."
  },
  {
    id: "q-c4-15",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Dòng điện trong kim loại",
    level: "Vận dụng",
    question: "Một dòng điện không đổi có cường độ $I = 1{,}6$ A chạy qua một dây dẫn kim loại. Lấy độ lớn điện tích nguyên tố $|e| = 1{,}6 \\cdot 10^{-19}$ C. Số electron chuyển qua tiết diện thẳng của dây dẫn trong thời gian $1$ giây là",
    options: [
      { id: "A", text: "$10^{18}$ hạt." },
      { id: "B", text: "$10^{19}$ hạt." },
      { id: "C", text: "$1{,}6 \\cdot 10^{19}$ hạt." },
      { id: "D", text: "$2{,}56 \\cdot 10^{19}$ hạt." }
    ],
    correct: "B",
    explanation: "Điện lượng chuyển qua trong thời gian $t = 1$ s là:\n$$q = I \\cdot t = 1{,}6 \\cdot 1 = 1{,}6 \\text{ C}$$\nSố electron tự do chuyển qua tiết diện thẳng:\n$$N_e = \\frac{q}{|e|} = \\frac{1{,}6}{1{,}6 \\cdot 10^{-19}} = 10^{19} \\text{ hạt}$$\nChọn B."
  },
  {
    id: "q-c4-sa01",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Cường độ dòng điện",
    level: "Thông hiểu",
    type: "short_answer",
    question: "Một lượng điện tích $q = 24\\text{ C}$ chuyển qua tiết diện thẳng của một dây dẫn kim loại trong khoảng thời gian $t = 15\\text{ s}$. Cường độ dòng điện không đổi chạy qua dây dẫn bằng bao nhiêu Ampe (A)?",
    correctValue: 1.6,
    unit: "A",
    tolerance: 0.05,
    explanation: "Cường độ dòng điện:\n$$I = \\frac{q}{t} = \\frac{24}{15} = 1{,}6\\text{ A}$$\nĐáp số: **1.6** (hoặc **1,6**)."
  },
  {
    id: "q-c4-sa02",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Định luật Ôm toàn mạch",
    level: "Thông hiểu",
    type: "short_answer",
    question: "Một mạch điện kín gồm nguồn điện có suất điện động $\\mathcal{E} = 9\\text{ V}$ và điện trở trong $r = 1\\,\\Omega$. Mạch ngoài là điện trở $R = 3{,}5\\,\\Omega$. Hiệu điện thế giữa hai cực của nguồn điện có giá trị bằng bao nhiêu Vôn (V)?",
    correctValue: 7,
    unit: "V",
    tolerance: 0.05,
    explanation: "Cường độ dòng điện trong mạch:\n$$I = \\frac{\\mathcal{E}}{R + r} = \\frac{9}{3{,}5 + 1} = 2\\text{ A}$$\nHiệu điện thế hai cực nguồn điện:\n$$U_N = I \\cdot R = 2 \\cdot 3{,}5 = 7\\text{ V}$$\n(hoặc $U_N = \\mathcal{E} - Ir = 9 - 2 \\cdot 1 = 7\\text{ V}$).\nĐáp số: **7** (hoặc **7.0**)."
  },
  {
    id: "q-c4-sa03",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Hiện tượng đoản mạch",
    level: "Thông hiểu",
    type: "short_answer",
    question: "Một nguồn điện có suất điện động $\\mathcal{E} = 12\\text{ V}$ và điện trở trong $r = 0{,}8\\,\\Omega$. Nếu nối trực tiếp hai cực của nguồn điện bằng một dây dẫn có điện trở không đáng kể thì cường độ dòng điện đoản mạch bằng bao nhiêu Ampe (A)?",
    correctValue: 15,
    unit: "A",
    tolerance: 0.1,
    explanation: "Cường độ dòng điện đoản mạch cực đại:\n$$I_{\\text{đm}} = \\frac{\\mathcal{E}}{r} = \\frac{12}{0{,}8} = 15\\text{ A}$$\nĐáp số: **15**."
  },
  {
    id: "q-c4-sa04",
    chapterId: 4,
    chapterName: "Chương IV: Dòng điện không đổi",
    lesson: "Hiệu suất nguồn điện",
    level: "Thông hiểu",
    type: "short_answer",
    question: "Một nguồn điện có điện trở trong $r = 1\\,\\Omega$ mắc với mạch ngoài có điện trở $R_N = 4\\,\\Omega$. Hiệu suất của nguồn điện bằng bao nhiêu phần trăm (\\%)?",
    correctValue: 80,
    unit: "%",
    tolerance: 0.5,
    explanation: "Hiệu suất của nguồn điện:\n$$H = \\frac{R_N}{R_N + r} \\cdot 100\\% = \\frac{4}{4 + 1} \\cdot 100\\% = \\frac{4}{5} \\cdot 100\\% = 80\\%$$\nĐáp số: **80**."
  }
];

