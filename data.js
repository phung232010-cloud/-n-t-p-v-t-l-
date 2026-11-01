// Dữ liệu công thức Vật lí 11 - Bộ sách Kết nối tri thức với cuộc sống
const physicsData = [
  // ==========================================
  // CHƯƠNG I: DAO ĐỘNG
  // ==========================================
  {
    id: "c1-01",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Bài 1 & 2: Dao động điều hòa và mô tả dao động",
    name: "Phương trình li độ dao động điều hòa",
    formulaLatex: "x = A \\cos(\\omega t + \\varphi)",
    derivativesLatex: [
      "\\Delta \\varphi = \\omega \\Delta t",
      "\\varphi_{\\text{pha}} = (\\omega t + \\varphi) \\text{ (rad)}"
    ],
    variables: [
      { sym: "x", name: "Li độ (độ lệch khỏi VTCB)", unit: "cm hoặc m" },
      { sym: "A", name: "Biên độ dao động (li độ cực đại, A > 0)", unit: "cm hoặc m" },
      { sym: "\\omega", name: "Tần số góc (\\omega > 0)", unit: "rad/s" },
      { sym: "t", name: "Thời điểm đang xét", unit: "s" },
      { sym: "\\varphi", name: "Pha ban đầu tại thời điểm t = 0", unit: "rad" },
      { sym: "(\\omega t + \\varphi)", name: "Pha dao động tại thời điểm t", unit: "rad" }
    ],
    pitfalls: [
      "Biên độ A luôn luôn dương ($A > 0$). Quỹ đạo chuyển động có chiều dài $L = 2A$. Quãng đường vật đi trong 1 chu kì luôn là $4A$.",
      "Nếu phương trình cho dưới dạng hàm $-\\cos$ hoặc hàm $\\sin$, phải đổi về chuẩn $+\\cos$ trước khi xác định pha ban đầu $\\varphi$.",
      "Công thức đổi hàm: $-\\cos(\\alpha) = \\cos(\\alpha \\pm \\pi)$, $\\sin(\\alpha) = \\cos(\\alpha - \\frac{\\pi}{2})$, $-\\sin(\\alpha) = \\cos(\\alpha + \\frac{\\pi}{2})$."
    ],
    tags: ["li độ", "biên độ", "pha ban đầu", "chu kì", "dao động điều hòa"]
  },
  {
    id: "c1-02",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Bài 2: Mô tả dao động điều hòa",
    name: "Chu kì, tần số và tần số góc",
    formulaLatex: "T = \\frac{2\\pi}{\\omega} = \\frac{1}{f} = \\frac{\\Delta t}{N}",
    derivativesLatex: [
      "\\omega = \\frac{2\\pi}{T} = 2\\pi f",
      "f = \\frac{1}{T} = \\frac{\\omega}{2\\pi} = \\frac{N}{\\Delta t}"
    ],
    variables: [
      { sym: "T", name: "Chu kì (thời gian thực hiện 1 dao động toàn phần)", unit: "s" },
      { sym: "f", name: "Tần số (số dao động toàn phần trong 1 giây)", unit: "Hz (Héc)" },
      { sym: "\\omega", name: "Tần số góc", unit: "rad/s" },
      { sym: "N", name: "Số dao động thực hiện được trong thời gian \\Delta t", unit: "dao động" },
      { sym: "\\Delta t", name: "Khoảng thời gian khảo sát", unit: "s" }
    ],
    pitfalls: [
      "Phân biệt rõ: Chu kì $T$ có đơn vị là giây ($s$), tần số $f$ có đơn vị là Héc ($Hz$).",
      "Số dao động toàn phần $N = \\frac{\\Delta t}{T}$."
    ],
    tags: ["chu kì", "tần số", "tần số góc", "thời gian dao động"]
  },
  {
    id: "c1-03",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Bài 3: Vận tốc và gia tốc trong dao động điều hòa",
    name: "Phương trình vận tốc",
    formulaLatex: "v = x' = -\\omega A \\sin(\\omega t + \\varphi) = \\omega A \\cos\\left(\\omega t + \\varphi + \\frac{\\pi}{2}\\right)",
    derivativesLatex: [
      "v_{\\max} = \\omega A \\quad \\text{(tại VTCB theo chiều dương)}",
      "v_{\\min} = -\\omega A \\quad \\text{(tại VTCB theo chiều âm)}",
      "\\text{Tốc độ cực đại: } |v|_{\\max} = \\omega A \\quad \\text{(tại VTCB)}",
      "\\text{Tốc độ cực tiểu: } |v|_{\\min} = 0 \\quad \\text{(tại hai biên)}"
    ],
    variables: [
      { sym: "v", name: "Vận tốc tức thời", unit: "cm/s hoặc m/s" },
      { sym: "v_{\\max}", name: "Vận tốc cực đại", unit: "cm/s hoặc m/s" },
      { sym: "\\omega A", name: "Tốc độ cực đại", unit: "cm/s hoặc m/s" }
    ],
    pitfalls: [
      "Vận tốc sớm pha hơn li độ một góc $\\frac{\\pi}{2}$ rad (vuông pha).",
      "Vectơ vận tốc luôn cùng chiều với chiều chuyển động của vật.",
      "Cần phân biệt giữa 'vận tốc' (có dấu âm/dương) và 'tốc độ' (độ lớn, luôn $\\ge 0$)."
    ],
    tags: ["vận tốc", "tốc độ", "đạo hàm", "sớm pha", "vmax"]
  },
  {
    id: "c1-04",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Bài 3: Vận tốc và gia tốc trong dao động điều hòa",
    name: "Phương trình gia tốc",
    formulaLatex: "a = v' = -\\omega^2 x = \\omega^2 A \\cos(\\omega t + \\varphi + \\pi)",
    derivativesLatex: [
      "a_{\\max} = \\omega^2 A \\quad \\text{(tại biên âm: } x = -A\\text{)}",
      "a_{\\min} = -\\omega^2 A \\quad \\text{(tại biên dương: } x = +A\\text{)}",
      "|a|_{\\max} = \\omega^2 A \\quad \\text{(tại hai biên)}",
      "|a|_{\\min} = 0 \\quad \\text{(tại VTCB)}"
    ],
    variables: [
      { sym: "a", name: "Gia tốc tức thời", unit: "cm/s^2 hoặc m/s^2" },
      { sym: "a_{\\max}", name: "Gia tốc cực đại", unit: "cm/s^2 hoặc m/s^2" }
    ],
    pitfalls: [
      "Gia tốc ngược pha với li độ (lệch $\\pi$) và sớm pha $\\frac{\\pi}{2}$ so với vận tốc.",
      "Vectơ gia tốc luôn hướng về Vị trí cân bằng và có độ lớn tỉ lệ với độ lớn của li độ.",
      "Vật chuyển động từ VTCB ra biên là chuyển động chậm dần (v và a trái dấu); từ biên về VTCB là nhanh dần (v và a cùng dấu)."
    ],
    tags: ["gia tốc", "ngược pha", "hướng VTCB", "amax"]
  },
  {
    id: "c1-05",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Bài 3: Vận tốc và gia tốc trong dao động điều hòa",
    name: "Hệ thức độc lập thời gian",
    formulaLatex: "x^2 + \\frac{v^2}{\\omega^2} = A^2 \\iff \\left(\\frac{x}{A}\\right)^2 + \\left(\\frac{v}{v_{\\max}}\\right)^2 = 1",
    derivativesLatex: [
      "A = \\sqrt{x^2 + \\frac{v^2}{\\omega^2}}",
      "\\left(\\frac{v}{v_{\\max}}\\right)^2 + \\left(\\frac{a}{a_{\\max}}\\right)^2 = 1 \\iff \\frac{v^2}{\\omega^2} + \\frac{a^2}{\\omega^4} = A^2",
      "a = -\\omega^2 x"
    ],
    variables: [
      { sym: "x, v, a", name: "Li độ, vận tốc, gia tốc tại cùng một thời điểm", unit: "cm, cm/s, cm/s^2" },
      { sym: "A", name: "Biên độ dao động", unit: "cm hoặc m" },
      { sym: "\\omega", name: "Tần số góc", unit: "rad/s" }
    ],
    pitfalls: [
      "Chú ý đồng nhất đơn vị: Nếu $x$ và $A$ dùng cm thì $v$ phải dùng cm/s; nếu dùng m thì $v$ phải là m/s.",
      "Hệ thức này áp dụng cho 2 đại lượng vuông pha: $\\left(\\frac{X_1}{X_{1\\max}}\\right)^2 + \\left(\\frac{X_2}{X_{2\\max}}\\right)^2 = 1$."
    ],
    tags: ["hệ thức độc lập", "vuông pha", "li độ vận tốc", "biên độ"]
  },
  {
    id: "c1-06",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Bài 4: Năng lượng trong dao động điều hòa",
    name: "Động năng, thế năng và cơ năng",
    formulaLatex: "W = W_đ + W_t = \\frac{1}{2}m v^2 + \\frac{1}{2}m \\omega^2 x^2 = \\frac{1}{2}m \\omega^2 A^2 = \\text{hằng số}",
    derivativesLatex: [
      "W_đ = \\frac{1}{2} m v^2 = \\frac{1}{2} m \\omega^2 A^2 \\sin^2(\\omega t + \\varphi)",
      "W_t = \\frac{1}{2} k x^2 = \\frac{1}{2} m \\omega^2 x^2 = \\frac{1}{2} m \\omega^2 A^2 \\cos^2(\\omega t + \\varphi)",
      "W_{\\max} = W_{đ\\max} = W_{t\\max} = \\frac{1}{2} k A^2 = \\frac{1}{2} m \\omega^2 A^2"
    ],
    variables: [
      { sym: "W", name: "Cơ năng (năng lượng toàn phần)", unit: "J (Jun)" },
      { sym: "W_đ", name: "Động năng của vật", unit: "J" },
      { sym: "W_t", name: "Thế năng của hệ", unit: "J" },
      { sym: "m", name: "Khối lượng của vật (bắt buộc đổi ra kg)", unit: "kg" },
      { sym: "A", name: "Biên độ dao động (bắt buộc đổi ra mét)", unit: "m" }
    ],
    pitfalls: [
      "Bẫy đơn vị: Khi tính năng lượng (Joule), $m$ phải đổi ra **kg**, li độ $x$ và biên độ $A$ phải đổi ra **mét (m)**.",
      "Trong dao động điều hòa, động năng và thế năng biến thiên tuần hoàn với tần số góc $\\omega' = 2\\omega$, tần số $f' = 2f$, chu kì $T' = \\frac{T}{2}$.",
      "Vị trí có $W_đ = n W_t \\implies x = \\pm \\frac{A}{\\sqrt{n+1}}$. Ngược lại $W_t = n W_đ \\implies v = \\pm \\frac{v_{\\max}}{\\sqrt{n+1}}$."
    ],
    tags: ["động năng", "thế năng", "cơ năng", "bảo toàn năng lượng", "Joule"]
  },
  {
    id: "c1-07",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Bài 5: Con lắc lò xo",
    name: "Tần số góc và chu kì của con lắc lò xo",
    formulaLatex: "\\omega = \\sqrt{\\frac{k}{m}} \\implies T = 2\\pi \\sqrt{\\frac{m}{k}} \\implies f = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m}}",
    derivativesLatex: [
      "\\text{Lò xo treo thẳng đứng: } \\Delta l_0 = \\frac{mg}{k} \\implies \\omega = \\sqrt{\\frac{g}{\\Delta l_0}} \\implies T = 2\\pi \\sqrt{\\frac{\\Delta l_0}{g}}",
      "\\text{Lực kéo về (hồi phục): } F_{kv} = -kx = -m\\omega^2 x",
      "F_{kv\\max} = kA = m\\omega^2 A \\quad \\text{(tại biên)}"
    ],
    variables: [
      { sym: "k", name: "Độ cứng lò xo", unit: "N/m" },
      { sym: "m", name: "Khối lượng quả nặng", unit: "kg" },
      { sym: "\\Delta l_0", name: "Độ biến dạng lò xo ở VTCB", unit: "m" },
      { sym: "g", name: "Gia tốc trọng trường", unit: "m/s^2" },
      { sym: "F_{kv}", name: "Lực hồi phục / kéo về", unit: "N" }
    ],
    pitfalls: [
      "Chu kì của con lắc lò xo chỉ phụ thuộc vào cấu tạo hệ ($m$ và $k$), không phụ thuộc vào biên độ $A$.",
      "Lực kéo về luôn hướng về Vị trí cân bằng ($F_{kv} = -kx$). Phân biệt lực đàn hồi và lực kéo về khi lò xo treo thẳng đứng."
    ],
    tags: ["con lắc lò xo", "độ cứng k", "lực kéo về", "độ dãn VTCB"]
  },
  {
    id: "c1-08",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Bài 5 & Đọc thêm: Con lắc đơn",
    name: "Chu kì và tần số của con lắc đơn",
    formulaLatex: "T = 2\\pi \\sqrt{\\frac{l}{g}} \\implies \\omega = \\sqrt{\\frac{g}{l}} \\implies f = \\frac{1}{2\\pi} \\sqrt{\\frac{g}{l}}",
    derivativesLatex: [
      "s = s_0 \\cos(\\omega t + \\varphi) \\quad (s_0 = l \\cdot \\alpha_0)",
      "\\alpha = \\alpha_0 \\cos(\\omega t + \\varphi) \\quad (\\alpha_0 \\le 10^\\circ \\approx 0{,}174 \\text{ rad})",
      "v = \\pm \\sqrt{2gl(\\cos\\alpha - \\cos\\alpha_0)} \\implies v_{\\max} = s_0\\omega = \\sqrt{2gl(1 - \\cos\\alpha_0)}"
    ],
    variables: [
      { sym: "l", name: "Chiều dài dây treo", unit: "m" },
      { sym: "g", name: "Gia tốc trọng trường tại nơi làm thí nghiệm", unit: "m/s^2" },
      { sym: "s_0, s", name: "Biên độ cong và li độ cong", unit: "m" },
      { sym: "\\alpha_0, \\alpha", name: "Biên độ góc và li độ góc", unit: "rad" }
    ],
    pitfalls: [
      "Điều kiện để con lắc đơn dao động điều hòa: Bỏ qua ma sát và biên độ góc nhỏ ($\\alpha_0 \\le 10^\\circ$).",
      "Chu kì con lắc đơn không phụ thuộc vào khối lượng $m$ của vật nặng."
    ],
    tags: ["con lắc đơn", "chiều dài l", "gia tốc g", "biên độ góc"]
  },
  {
    id: "c1-09",
    chapterId: 1,
    chapterName: "Chương I: Dao động",
    lesson: "Bài 6: Dao động tắt dần, dao động cưỡng bức và cộng hưởng",
    name: "Điều kiện xảy ra hiện tượng cộng hưởng",
    formulaLatex: "f_{\\text{cb}} = f_0 \\iff \\omega_{\\text{cb}} = \\omega_0",
    derivativesLatex: [
      "A_{\\text{cộng hưởng}} = A_{\\max}",
      "\\text{Lực cản môi trường càng nhỏ } \\implies A_{\\max} \\text{ càng lớn (cộng hưởng càng nhọn)}"
    ],
    variables: [
      { sym: "f_{\\text{cb}}", name: "Tần số của ngoại lực cưỡng bức tuần hoàn", unit: "Hz" },
      { sym: "f_0", name: "Tần số dao động riêng của hệ", unit: "Hz" },
      { sym: "A", name: "Biên độ dao động cưỡng bức ở trạng thái ổn định", unit: "cm hoặc m" }
    ],
    pitfalls: [
      "Tần số dao động cưỡng bức luôn bằng tần số của ngoại lực ($f = f_{\\text{cb}}$), KHÔNG phụ thuộc vào tần số riêng $f_0$.",
      "Khi xảy ra hiện tượng cộng hưởng: biên độ đạt cực đại vì $f_{\\text{cb}} \\approx f_0$."
    ],
    tags: ["cộng hưởng", "dao động cưỡng bức", "dao động tắt dần", "tần số riêng"]
  },

  // ==========================================
  // CHƯƠNG II: SÓNG
  // ==========================================
  {
    id: "c2-01",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Bài 8: Mô tả sóng và các đặc trưng của sóng",
    name: "Hệ thức cơ bản giữa tốc độ truyền sóng, bước sóng và chu kì",
    formulaLatex: "\\lambda = v \\cdot T = \\frac{v}{f} \\implies v = \\frac{\\lambda}{T} = \\lambda \\cdot f",
    derivativesLatex: [
      "v = \\frac{s}{\\Delta t} \\quad (s \\text{ là quãng đường sóng truyền})",
      "\\lambda = \\frac{s}{N} \\quad (N \\text{ là số bước sóng})"
    ],
    variables: [
      { sym: "\\lambda", name: "Bước sóng (quãng đường sóng truyền trong 1 chu kì)", unit: "m hoặc cm" },
      { sym: "v", name: "Tốc độ truyền sóng (chỉ phụ thuộc vào môi trường)", unit: "m/s hoặc cm/s" },
      { sym: "T", name: "Chu kì của sóng (bằng chu kì nguồn sóng)", unit: "s" },
      { sym: "f", name: "Tần số của sóng (không đổi khi truyền qua các môi trường)", unit: "Hz" }
    ],
    pitfalls: [
      "Bước sóng là khoảng cách giữa hai điểm gần nhau nhất trên cùng một phương truyền sóng dao động **cùng pha**.",
      "Khi sóng truyền từ môi trường này sang môi trường khác: Tần số $f$ và chu kì $T$ **KHÔNG ĐỔI**, tốc độ $v$ và bước sóng $\\lambda$ **thay đổi**.",
      "Tốc độ truyền sóng cơ: $v_{\\text{rắn}} > v_{\\text{lỏng}} > v_{\\text{khí}}$ (ngược lại với sóng điện từ)."
    ],
    tags: ["bước sóng", "tốc độ sóng", "chu kì sóng", "tần số sóng"]
  },
  {
    id: "c2-02",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Bài 8: Mô tả sóng",
    name: "Phương trình sóng và Độ lệch pha theo khoảng cách",
    formulaLatex: "u_M = A \\cos\\left(\\omega t - \\frac{2\\pi x}{\\lambda}\\right) = A \\cos\\left(\\omega t - \\frac{2\\pi d}{\\lambda}\\right)",
    derivativesLatex: [
      "\\Delta \\varphi = \\frac{2\\pi d}{\\lambda} = \\frac{2\\pi (x_2 - x_1)}{\\lambda}",
      "\\text{Cùng pha: } d = k\\lambda \\quad (k \\in \\mathbb{Z})",
      "\\text{Ngược pha: } d = (2k + 1)\\frac{\\lambda}{2} \\quad (k \\in \\mathbb{Z})",
      "\\text{Vuông pha: } d = (2k + 1)\\frac{\\lambda}{4} \\quad (k \\in \\mathbb{Z})"
    ],
    variables: [
      { sym: "u_M", name: "Li độ sóng tại điểm M ở thời điểm t", unit: "cm hoặc mm" },
      { sym: "x, d", name: "Khoảng cách từ nguồn O đến điểm M (hoặc giữa 2 điểm)", unit: "m hoặc cm" },
      { sym: "\\Delta \\varphi", name: "Độ lệch pha giữa hai điểm trên cùng một phương truyền", unit: "rad" }
    ],
    pitfalls: [
      "Điểm M nhận sóng từ nguồn O trễ hơn nguồn một khoảng thời gian $\\Delta t = \\frac{x}{v}$, nên có dấu trừ: $-\\frac{2\\pi x}{\\lambda}$.",
      "Khoảng cách giữa hai đỉnh sóng (gợn sóng) liên tiếp bằng đúng một bước sóng $\\lambda$."
    ],
    tags: ["phương trình sóng", "độ lệch pha", "cùng pha", "ngược pha"]
  },
  {
    id: "c2-03",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Bài 9: Giao thoa sóng cơ",
    name: "Điều kiện cực đại và cực tiểu giao thoa (2 nguồn cùng pha)",
    formulaLatex: "d_2 - d_1 = k \\lambda \\quad (\\text{Cực đại}) \\quad ; \\quad d_2 - d_1 = \\left(k + \\frac{1}{2}\\right)\\lambda \\quad (\\text{Cực tiểu})",
    derivativesLatex: [
      "\\text{Biên độ tổng hợp tại M: } A_M = 2A \\left|\\cos\\left(\\frac{\\pi(d_2 - d_1)}{\\lambda}\\right)\\right|",
      "\\text{Khoảng cách giữa 2 cực đại (hoặc cực tiểu) liên tiếp trên đoạn } S_1S_2: \\frac{\\lambda}{2}",
      "\\text{Số cực đại trên đoạn } S_1S_2: -\\frac{S_1S_2}{\\lambda} < k < \\frac{S_1S_2}{\\lambda} \\quad (k \\in \\mathbb{Z})"
    ],
    variables: [
      { sym: "d_1, d_2", name: "Khoảng cách từ điểm M đến hai nguồn kết hợp S1 và S2", unit: "m hoặc cm" },
      { sym: "k", name: "Bậc giao thoa (số nguyên: 0, ±1, ±2...)", unit: "không đơn vị" },
      { sym: "\\lambda", name: "Bước sóng của sóng truyền", unit: "m hoặc cm" }
    ],
    pitfalls: [
      "Cực đại trung tâm ứng với $k = 0$ (đường trung trực của đoạn nối 2 nguồn).",
      "Nếu hai nguồn **ngược pha**: Điều kiện cực đại và cực tiểu sẽ hoán đổi cho nhau ($d_2 - d_1 = (k+0{,}5)\\lambda$ là cực đại)."
    ],
    tags: ["giao thoa sóng", "cực đại", "cực tiểu", "nguồn kết hợp"]
  },
  {
    id: "c2-04",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Bài 10: Sóng dừng",
    name: "Điều kiện có sóng dừng trên dây",
    formulaLatex: "L = k \\frac{\\lambda}{2} \\quad (\\text{2 đầu cố định}) \\quad ; \\quad L = (2k + 1)\\frac{\\lambda}{4} \\quad (\\text{1 đầu cố định, 1 đầu tự do})",
    derivativesLatex: [
      "\\text{Dây 2 đầu cố định: } k = \\text{Số bụng sóng; } k+1 = \\text{Số nút sóng}",
      "\\text{Dây 1 đầu cố định, 1 đầu tự do: } k = \\text{Số bó sóng; } k+1 = \\text{Số bụng = Số nút}",
      "\\text{Khoảng cách giữa 2 nút (hoặc 2 bụng) liên tiếp: } \\frac{\\lambda}{2}",
      "\\text{Khoảng cách giữa nút và bụng gần nhất: } \\frac{\\lambda}{4}"
    ],
    variables: [
      { sym: "L", name: "Chiều dài sợi dây", unit: "m hoặc cm" },
      { sym: "k", name: "Số nguyên dương (k = 1, 2, 3...)", unit: "không đơn vị" },
      { sym: "\\lambda", name: "Bước sóng sóng dừng", unit: "m hoặc cm" }
    ],
    pitfalls: [
      "Đầu gắn với cần rung có biên độ dao động rất nhỏ nên luôn được coi là **nút** cố định.",
      "Tất cả các điểm trên cùng một bó sóng luôn dao động **cùng pha**; hai điểm thuộc 2 bó kề nhau dao động **ngược pha**."
    ],
    tags: ["sóng dừng", "bụng sóng", "nút sóng", "hai đầu cố định", "đầu tự do"]
  },
  {
    id: "c2-05",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Bài 11: Giao thoa ánh sáng (Thí nghiệm Young)",
    name: "Khoảng vân và vị trí vân sáng, vân tối",
    formulaLatex: "i = \\frac{\\lambda D}{a} \\implies x_s = k \\cdot i = k \\frac{\\lambda D}{a} \\quad ; \\quad x_t = \\left(k + \\frac{1}{2}\\right) i = \\left(k + \\frac{1}{2}\\right)\\frac{\\lambda D}{a}",
    derivativesLatex: [
      "\\lambda = \\frac{a \\cdot i}{D}",
      "\\text{Bề rộng vùng giao thoa L: } N_s = 2\\left[\\frac{L}{2i}\\right] + 1",
      "\\text{Bề rộng quang phổ bậc } k: \\Delta x_k = k \\frac{D}{a} (\\lambda_{\\text{đỏ}} - \\lambda_{\\text{tím}})"
    ],
    variables: [
      { sym: "i", name: "Khoảng vân (khoảng cách giữa 2 vân sáng hoặc 2 vân tối kề nhau)", unit: "mm" },
      { sym: "\\lambda", name: "Bước sóng ánh sáng đơn sắc (thường dùng \\mu m hoặc nm)", unit: "m hoặc \\mu m" },
      { sym: "D", name: "Khoảng cách từ mặt phẳng chứa hai khe đến màn quan sát", unit: "m" },
      { sym: "a", name: "Khoảng cách giữa hai khe hẹp Young", unit: "mm" },
      { sym: "x_s, x_t", name: "Tọa độ vân sáng, vân tối so với vân trung tâm", unit: "mm" },
      { sym: "k", name: "Bậc giao thoa (với vân tối thứ n thì k = n - 1 hoặc k = -n)", unit: "không đơn vị" }
    ],
    pitfalls: [
      "**Mẹo đổi đơn vị chuẩn giao thoa:** Nếu $a$ tính bằng mm, $D$ tính bằng m, $\\lambda$ tính bằng $\\mu m$ thì khoảng vân $i$ và tọa độ $x$ tự động ra đơn vị **mm** (không cần đổi về mét).",
      "Vân tối thứ 1: $k = 0 \\implies x_{t1} = 0{,}5i$. Vân tối thứ $n$: $x_{tn} = (n - 0{,}5)i$."
    ],
    tags: ["giao thoa ánh sáng", "khe young", "khoảng vân", "vân sáng", "vân tối"]
  },
  {
    id: "c2-06",
    chapterId: 2,
    chapterName: "Chương II: Sóng",
    lesson: "Bài 12: Sóng điện từ và thang sóng điện từ",
    name: "Tốc độ lan truyền và Thang sóng điện từ",
    formulaLatex: "c = \\lambda \\cdot f \\implies \\lambda = \\frac{c}{f} \\quad (c \\approx 3 \\cdot 10^8 \\text{ m/s})",
    derivativesLatex: [
      "\\text{Trong môi trường có chiết suất } n: v = \\frac{c}{n} \\implies \\lambda_n = \\frac{\\lambda}{n}",
      "\\text{Thứ tự bước sóng giảm dần: } \\text{Vô tuyến} > \\text{Hồng ngoại} > \\text{Nhìn thấy} > \\text{Tử ngoại} > \\text{Tia X} > \\text{Tia } \\gamma"
    ],
    variables: [
      { sym: "c", name: "Tốc độ ánh sáng trong chân không", unit: "3.10^8 m/s" },
      { sym: "\\lambda", name: "Bước sóng trong chân không", unit: "m" },
      { sym: "f", name: "Tần số sóng điện từ", unit: "Hz" },
      { sym: "n", name: "Chiết suất tuyệt đối của môi trường (n \\ge 1)", unit: "không đơn vị" }
    ],
    pitfalls: [
      "Vùng nhìn thấy có bước sóng từ khoảng $0{,}38\\,\\mu\\text{m}$ (tím) đến $0{,}76\\,\\mu\\text{m}$ (đỏ).",
      "Sóng điện từ là sóng ngang, lan truyền được trong cả chân không (sóng cơ không truyền được trong chân không).",
      "Tia có tần số càng lớn (bước sóng càng ngắn) thì khả năng đâm xuyên và năng lượng càng mạnh."
    ],
    tags: ["sóng điện từ", "thang sóng điện từ", "tốc độ ánh sáng", "tia X", "tia hồng ngoại"]
  },

  // ==========================================
  // CHƯƠNG III: ĐIỆN TRƯỜNG
  // ==========================================
  {
    id: "c3-01",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Bài 16: Lực tương tác tĩnh điện - Định luật Coulomb",
    name: "Định luật Coulomb (Cu-lông)",
    formulaLatex: "F = k \\frac{|q_1 q_2|}{\\varepsilon r^2} \\quad \\left(k = 9 \\cdot 10^9 \\text{ N}\\cdot\\text{m}^2/\\text{C}^2\\right)",
    derivativesLatex: [
      "\\text{Trong chân không hoặc không khí: } \\varepsilon = 1 \\implies F = k \\frac{|q_1 q_2|}{r^2}",
      "\\vec{F}_{12} = -\\vec{F}_{21} \\quad (\\text{Tuân theo Định luật III Newton})"
    ],
    variables: [
      { sym: "F", name: "Lực tương tác giữa hai điện tích điểm", unit: "N (Newton)" },
      { sym: "q_1, q_2", name: "Độ lớn điện tích của 2 vật điểm", unit: "C (Cu-lông)" },
      { sym: "r", name: "Khoảng cách giữa hai điện tích", unit: "m (phải đổi ra mét)" },
      { sym: "\\varepsilon", name: "Hằng số điện môi của môi trường (\\varepsilon \\ge 1)", unit: "không đơn vị" },
      { sym: "k", name: "Hằng số tĩnh điện (k = 9.10^9)", unit: "N.m^2/C^2" }
    ],
    pitfalls: [
      "Hai điện tích cùng dấu thì đẩy nhau; trái dấu thì hút nhau.",
      "Lực tương tác tỉ lệ nghịch với **bình phương khoảng cách** ($r^2$), nếu khoảng cách tăng gấp đôi thì lực giảm đi 4 lần.",
      "Phải đổi đơn vị: $1\\,\\mu\\text{C} = 10^{-6}\\,\\text{C}$; $1\\,\\text{nC} = 10^{-9}\\,\\text{C}$; $1\\,\\text{pC} = 10^{-12}\\,\\text{C}$; khoảng cách $r$ tính bằng mét."
    ],
    tags: ["coulomb", "lực tĩnh điện", "điện tích", "hằng số điện môi"]
  },
  {
    id: "c3-02",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Bài 17: Khái niệm điện trường",
    name: "Cường độ điện trường & Lực điện",
    formulaLatex: "\\vec{E} = \\frac{\\vec{F}}{q} \\implies \\vec{F} = q \\vec{E} \\implies F = |q| E",
    derivativesLatex: [
      "\\text{Cường độ điện trường do điện tích điểm } Q: E = k \\frac{|Q|}{\\varepsilon r^2}",
      "\\text{Nguyên lý chồng chất điện trường: } \\vec{E} = \\vec{E}_1 + \\vec{E}_2 + \\dots"
    ],
    variables: [
      { sym: "E", name: "Cường độ điện trường", unit: "V/m (Vôn trên mét) hoặc N/C" },
      { sym: "F", name: "Lực điện tác dụng lên điện tích thử q", unit: "N" },
      { sym: "q", name: "Điện tích thử đặt trong điện trường", unit: "C" },
      { sym: "Q", name: "Điện tích nguồn gây ra điện trường", unit: "C" },
      { sym: "r", name: "Khoảng cách từ điện tích nguồn Q đến điểm khảo sát", unit: "m" }
    ],
    pitfalls: [
      "Nếu $q > 0$ thì $\\vec{F} \\uparrow\\uparrow \\vec{E}$ (lực cùng hướng với điện trường).",
      "Nếu $q < 0$ thì $\\vec{F} \\uparrow\\downarrow \\vec{E}$ (lực ngược hướng với điện trường).",
      "Vectơ $\\vec{E}$ do điện tích dương gây ra hướng **ra xa nó**; do điện tích âm gây ra hướng **về phía nó**."
    ],
    tags: ["điện trường", "cường độ điện trường", "lực điện", "nguyên lý chồng chất"]
  },
  {
    id: "c3-03",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Bài 18: Điện thế và thế năng điện",
    name: "Công của lực điện & Thế năng điện",
    formulaLatex: "A_{MN} = q E d_{MN} = W_M - W_N = q(V_M - V_N)",
    derivativesLatex: [
      "W_M = q V_M = A_{M\\infty} \\quad (\\text{với mốc thế năng tại vô cùng})",
      "d_{MN} = \\overline{M'N'} = s \\cdot \\cos\\alpha \\quad (\\text{hình chiếu lên đường sức})"
    ],
    variables: [
      { sym: "A_{MN}", name: "Công của lực điện làm dịch chuyển q từ M đến N", unit: "J (Jun)" },
      { sym: "d_{MN}", name: "Độ dài đại số hình chiếu đường đi lên một đường sức điện", unit: "m" },
      { sym: "W_M, W_N", name: "Thế năng của điện tích q tại điểm M và N", unit: "J" },
      { sym: "V_M, V_N", name: "Điện thế tại điểm M và điểm N", unit: "V (Vôn)" }
    ],
    pitfalls: [
      "Công của lực điện trường **không phụ thuộc** vào dạng đường đi, chỉ phụ thuộc vào vị trí điểm đầu $M$ và điểm cuối $N$ (trường tĩnh điện là trường thế).",
      "Nếu đường đi khép kín thì công $A = 0$.",
      "Hình chiếu $d$ có dấu đại số: cùng chiều đường sức thì $d > 0$, ngược chiều đường sức thì $d < 0$."
    ],
    tags: ["công lực điện", "thế năng điện", "điện trường đều", "hình chiếu d"]
  },
  {
    id: "c3-04",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Bài 19: Điện thế và hiệu điện thế",
    name: "Hiệu điện thế và Mối liên hệ với Cường độ điện trường",
    formulaLatex: "U_{MN} = V_M - V_N = \\frac{A_{MN}}{q} \\iff E = \\frac{U}{d}",
    derivativesLatex: [
      "A_{MN} = q U_{MN}",
      "U_{MN} = -U_{NM}",
      "U_{MN} = E \\cdot d_{MN}"
    ],
    variables: [
      { sym: "U_{MN}", name: "Hiệu điện thế giữa hai điểm M và N", unit: "V (Vôn)" },
      { sym: "V_M, V_N", name: "Điện thế tại điểm M và N", unit: "V" },
      { sym: "E", name: "Cường độ điện trường đều", unit: "V/m" },
      { sym: "d", name: "Khoảng cách giữa hai mặt đẳng thế đo dọc theo đường sức", unit: "m" }
    ],
    pitfalls: [
      "Chiều của vectơ cường độ điện trường $\\vec{E}$ luôn hướng từ nơi có điện thế cao sang nơi có điện thế thấp ($V_M > V_N$).",
      "Công thức $E = \\frac{U}{d}$ giải thích tại sao đơn vị của cường độ điện trường là **V/m**."
    ],
    tags: ["hiệu điện thế", "điện thế", "mối liên hệ E và U", "Vôn trên mét"]
  },
  {
    id: "c3-05",
    chapterId: 3,
    chapterName: "Chương III: Điện trường",
    lesson: "Bài 21: Tụ điện và năng lượng điện trường",
    name: "Điện dung của tụ điện & Năng lượng điện trường",
    formulaLatex: "C = \\frac{Q}{U} \\quad ; \\quad W = \\frac{1}{2} C U^2 = \\frac{1}{2} Q U = \\frac{Q^2}{2 C}",
    derivativesLatex: [
      "\\text{Tụ phẳng: } C = \\frac{\\varepsilon S}{4\\pi k d} = \\frac{\\varepsilon \\varepsilon_0 S}{d}",
      "\\text{Ghép nối tiếp: } \\frac{1}{C_b} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\dots \\ ; \\ Q_b = Q_1 = Q_2 \\ ; \\ U_b = U_1 + U_2",
      "\\text{Ghép song song: } C_b = C_1 + C_2 + \\dots \\ ; \\ U_b = U_1 = U_2 \\ ; \\ Q_b = Q_1 + Q_2"
    ],
    variables: [
      { sym: "C", name: "Điện dung của tụ điện", unit: "F (Fara)" },
      { sym: "Q", name: "Điện tích tích được của tụ", unit: "C (Cu-lông)" },
      { sym: "U", name: "Hiệu điện thế giữa hai bản tụ điện", unit: "V" },
      { sym: "W", name: "Năng lượng điện trường dự trữ trong tụ", unit: "J (Jun)" },
      { sym: "S", name: "Diện tích đối diện giữa hai bản tụ", unit: "m^2" }
    ],
    pitfalls: [
      "Điện dung $C$ là đại lượng đặc trưng cho khả năng tích điện của tụ, $C$ **không phụ thuộc** vào $Q$ và $U$ (giống như dung tích của chiếc bình chứa nước).",
      "Đổi đơn vị Fara: $1\\,\\mu\\text{F} = 10^{-6}\\,\\text{F}$; $1\\,\\text{nF} = 10^{-9}\\,\\text{F}$; $1\\,\\text{pF} = 10^{-12}\\,\\text{F}$."
    ],
    tags: ["tụ điện", "điện dung C", "năng lượng điện trường", "ghép tụ"]
  },

  // ==========================================
  // CHƯƠNG IV: DÒNG ĐIỆN KHÔNG ĐỔI
  // ==========================================
  {
    id: "c4-01",
    chapterId: 4,
    chapterName: "Chương IV: Mạch điện & Dòng điện không đổi",
    lesson: "Bài 22: Cường độ dòng điện",
    name: "Định nghĩa Cường độ dòng điện & Dòng điện trong kim loại",
    formulaLatex: "I = \\frac{\\Delta q}{\\Delta t} = \\frac{q}{t} \\quad ; \\quad I = n \\cdot S \\cdot v \\cdot e",
    derivativesLatex: [
      "q = I \\cdot t = N_e \\cdot e \\implies N_e = \\frac{I \\cdot t}{e}",
      "\\text{Mật độ dòng điện: } j = \\frac{I}{S} = n \\cdot v \\cdot e"
    ],
    variables: [
      { sym: "I", name: "Cường độ dòng điện", unit: "A (Ampe)" },
      { sym: "q, \\Delta q", name: "Điện lượng chuyển qua tiết diện thẳng của dây dẫn", unit: "C" },
      { sym: "t, \\Delta t", name: "Thời gian điện lượng chuyển qua", unit: "s" },
      { sym: "n", name: "Mật độ hạt mang điện (số electron tự do trong 1 m^3)", unit: "hạt/m^3" },
      { sym: "S", name: "Tiết diện thẳng của dây dẫn", unit: "m^2" },
      { sym: "v", name: "Tốc độ dịch chuyển có hướng (tốc độ trôi) của electron", unit: "m/s" },
      { sym: "e", name: "Điện tích nguyên tố (|e| \\approx 1{,}6 \\cdot 10^{-19})", unit: "C" },
      { sym: "N_e", name: "Số electron chuyển qua tiết diện thẳng", unit: "hạt" }
    ],
    pitfalls: [
      "Quy ước chiều dòng điện là chiều chuyển động của các hạt điện tích dương (ngược chiều chuyển động của các electron trong kim loại).",
      "Tốc độ trôi của electron trong dây dẫn rất nhỏ (cỡ vài mm/s hoặc cm/s), nhưng dòng điện thiết lập gần như tức thời nhờ điện trường lan truyền với tốc độ ánh sáng."
    ],
    tags: ["cường độ dòng điện", "tốc độ trôi", "mật độ electron", "Ampe", "điện lượng"]
  },
  {
    id: "c4-02",
    chapterId: 4,
    chapterName: "Chương IV: Mạch điện & Dòng điện không đổi",
    lesson: "Bài 23: Điện trở và Định luật Ôm cho đoạn mạch",
    name: "Định luật Ôm cho đoạn mạch & Điện trở dây dẫn",
    formulaLatex: "I = \\frac{U}{R} \\implies R = \\frac{U}{I} \\quad ; \\quad R = \\rho \\frac{l}{S}",
    derivativesLatex: [
      "\\text{Phụ thuộc nhiệt độ: } R = R_0[1 + \\alpha(t - t_0)] \\quad ; \\quad \\rho = \\rho_0[1 + \\alpha(t - t_0)]",
      "\\text{Mắc nối tiếp: } R_{nt} = R_1 + R_2 + \\dots \\ ; \\ I = I_1 = I_2 \\ ; \\ U = U_1 + U_2",
      "\\text{Mắc song song: } \\frac{1}{R_{ss}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots \\ ; \\ U = U_1 = U_2 \\ ; \\ I = I_1 + I_2"
    ],
    variables: [
      { sym: "R", name: "Điện trở của vật dẫn", unit: "\\Omega (Ôm)" },
      { sym: "U", name: "Hiệu điện thế giữa hai đầu đoạn mạch", unit: "V" },
      { sym: "I", name: "Cường độ dòng điện chạy qua điện trở", unit: "A" },
      { sym: "\\rho", name: "Điện trở suất của vật liệu làm dây dẫn", unit: "\\Omega \\cdot m" },
      { sym: "l", name: "Chiều dài của dây dẫn", unit: "m" },
      { sym: "S", name: "Tiết diện ngang của dây dẫn (S = \\pi r^2 = \\frac{\\pi d^2}{4})", unit: "m^2" },
      { sym: "\\alpha", name: "Hệ số nhiệt điện trở", unit: "K^{-1}" }
    ],
    pitfalls: [
      "Điện trở $R$ là đại lượng vật lý đặc trưng cho tính cản trở dòng điện của vật dẫn, chỉ phụ thuộc vào bản chất vật liệu, kích thước hình học và nhiệt độ, **không phụ thuộc** vào $U$ và $I$.",
      "Đổi tiết diện: $1\\,\\text{mm}^2 = 10^{-6}\\,\\text{m}^2$."
    ],
    tags: ["định luật ôm", "điện trở", "điện trở suất", "nối tiếp song song"]
  },
  {
    id: "c4-03",
    chapterId: 4,
    chapterName: "Chương IV: Mạch điện & Dòng điện không đổi",
    lesson: "Bài 24: Nguồn điện và Suất điện động",
    name: "Suất điện động của nguồn điện",
    formulaLatex: "\\mathcal{E} = \\frac{A_{\\text{lực lạ}}}{q}",
    derivativesLatex: [
      "A_{\\text{lực lạ}} = q \\cdot \\mathcal{E} = \\mathcal{E} I t",
      "\\text{Nguồn có điện trở trong: } r \\quad (\\Omega)"
    ],
    variables: [
      { sym: "\\mathcal{E}", name: "Suất điện động của nguồn điện", unit: "V (Vôn)" },
      { sym: "A_{\\text{lực lạ}}", name: "Công của lực lạ bên trong nguồn điện", unit: "J (Jun)" },
      { sym: "q", name: "Điện lượng dịch chuyển qua nguồn", unit: "C" },
      { sym: "r", name: "Điện trở trong của nguồn điện", unit: "\\Omega" }
    ],
    pitfalls: [
      "Lực lạ bên trong nguồn điện (lực hóa học, nhiệt điện...) có tác dụng tách và di chuyển các hạt điện tích ngược chiều điện trường tĩnh điện.",
      "Suất điện động đặc trưng cho khả năng thực hiện công của nguồn điện, bằng hiệu điện thế hai cực khi mạch ngoài hở ($I = 0$)."
    ],
    tags: ["suất điện động", "nguồn điện", "lực lạ", "điện trở trong"]
  },
  {
    id: "c4-04",
    chapterId: 4,
    chapterName: "Chương IV: Mạch điện & Dòng điện không đổi",
    lesson: "Bài 25: Định luật Ôm cho toàn mạch",
    name: "Định luật Ôm cho toàn mạch & Hiện tượng đoản mạch",
    formulaLatex: "I = \\frac{\\mathcal{E}}{R_N + r} \\implies U_N = \\mathcal{E} - I \\cdot r = I \\cdot R_N",
    derivativesLatex: [
      "\\mathcal{E} = I(R_N + r) = U_N + I \\cdot r",
      "\\text{Đoản mạch (ngắn mạch) khi } R_N \\approx 0 \\implies I_{\\text{đm}} = \\frac{\\mathcal{E}}{r}",
      "\\text{Ghép nguồn nối tiếp: } \\mathcal{E}_b = n\\mathcal{E} \\ ; \\ r_b = n r",
      "\\text{Ghép nguồn song song (n nguồn giống nhau): } \\mathcal{E}_b = \\mathcal{E} \\ ; \\ r_b = \\frac{r}{n}"
    ],
    variables: [
      { sym: "I", name: "Cường độ dòng điện trong toàn mạch", unit: "A" },
      { sym: "\\mathcal{E}", name: "Suất điện động của bộ nguồn", unit: "V" },
      { sym: "R_N", name: "Điện trở tương đương của mạch ngoài", unit: "\\Omega" },
      { sym: "r", name: "Điện trở trong của bộ nguồn", unit: "\\Omega" },
      { sym: "U_N", name: "Hiệu điện thế mạch ngoài (đo giữa hai cực của nguồn)", unit: "V" }
    ],
    pitfalls: [
      "Khi mạch ngoài có $R_N \\to 0$, dòng điện đoản mạch $I_{\\text{đm}} = \\frac{\\mathcal{E}}{r}$ sẽ rất lớn, dễ gây cháy nổ hoặc hỏng nguồn.",
      "Hiệu điện thế hai cực nguồn $U_N$ luôn nhỏ hơn hoặc bằng suất điện động $\\mathcal{E}$ (chỉ bằng khi mạch hở $I = 0$ hoặc bỏ qua điện trở trong $r = 0$)."
    ],
    tags: ["định luật ôm toàn mạch", "đoản mạch", "hiệu điện thế mạch ngoài", "ghép nguồn"]
  },
  {
    id: "c4-05",
    chapterId: 4,
    chapterName: "Chương IV: Mạch điện & Dòng điện không đổi",
    lesson: "Bài 26: Năng lượng và công suất điện",
    name: "Công và Công suất của dòng điện & Định luật Joule - Lenz",
    formulaLatex: "A = U I t \\quad ; \\quad \\mathcal{P} = \\frac{A}{t} = U I = I^2 R = \\frac{U^2}{R}",
    derivativesLatex: [
      "\\text{Nhiệt lượng tỏa ra (Joule-Lenz): } Q = R I^2 t = \\frac{U^2}{R} t",
      "\\text{Công của nguồn điện: } A_{\\text{ng}} = \\mathcal{E} I t \\implies \\mathcal{P}_{\\text{ng}} = \\mathcal{E} I",
      "\\text{Hiệu suất nguồn điện: } H = \\frac{A_{\\text{ích}}}{A_{\\text{tp}}} = \\frac{U_N I t}{\\mathcal{E} I t} = \\frac{U_N}{\\mathcal{E}} = \\frac{R_N}{R_N + r}",
      "\\text{Công suất cực đại mạch ngoài khi } R_N = r: \\mathcal{P}_{N\\max} = \\frac{\\mathcal{E}^2}{4r}"
    ],
    variables: [
      { sym: "A", name: "Điện năng tiêu thụ của đoạn mạch", unit: "J (hoặc kW.h, 1 kW.h = 3.600.000 J)" },
      { sym: "\\mathcal{P}", name: "Công suất tiêu thụ điện", unit: "W (Oát) hoặc kW" },
      { sym: "Q", name: "Nhiệt lượng tỏa ra trên vật dẫn", unit: "J" },
      { sym: "H", name: "Hiệu suất của nguồn điện (thường nhân 100%)", unit: "%" },
      { sym: "\\mathcal{P}_{\\text{ng}}", name: "Công suất toàn phần của nguồn điện", unit: "W" }
    ],
    pitfalls: [
      "Định luật Joule - Lenz ($Q = I^2 R t$) chỉ áp dụng cho tác dụng nhiệt trên điện trở thuần.",
      "Hiệu suất nguồn điện $H = \\frac{R_N}{R_N + r}$: Mạch ngoài có điện trở càng lớn so với điện trở trong $r$ thì hiệu suất càng cao.",
      "Bài toán tìm $R_N$ để công suất mạch ngoài cực đại: Bất đẳng thức Cô-si cho $\\mathcal{P}_N = \\frac{\\mathcal{E}^2 R_N}{(R_N + r)^2}$ đạt max khi $R_N = r$."
    ],
    tags: ["công suất điện", "năng lượng điện", "joule lenz", "hiệu suất nguồn", "công suất cực đại"]
  }
];

// Danh sách bài tập/máy tính nhanh tương tác
const calculatorPresets = [
  {
    id: "calc-pendulum",
    name: "Chu kì & Tần số dao động điều hòa (Con lắc lò xo)",
    desc: "Tính chu kì T và tần số f từ khối lượng m và độ cứng k",
    formula: "T = 2\\pi \\sqrt{\\frac{m}{k}} \\quad ; \\quad f = \\frac{1}{T}",
    inputs: [
      { id: "m", label: "Khối lượng quả nặng m (gam)", default: 200, unit: "g", scale: 0.001 },
      { id: "k", label: "Độ cứng lò xo k (N/m)", default: 50, unit: "N/m", scale: 1 }
    ],
    calculate: (vals) => {
      const m = vals.m * 0.001;
      const k = vals.k;
      if (m <= 0 || k <= 0) return { error: "Khối lượng và độ cứng phải lớn hơn 0" };
      const omega = Math.sqrt(k / m);
      const T = (2 * Math.PI) / omega;
      const f = 1 / T;
      return {
        results: [
          { label: "Tần số góc (ω)", value: omega.toFixed(3), unit: "rad/s" },
          { label: "Chu kì (T)", value: T.toFixed(4), unit: "s" },
          { label: "Tần số (f)", value: f.toFixed(3), unit: "Hz" }
        ],
        step: `m = ${m} kg, k = ${k} N/m \\implies \\omega = \\sqrt{\\frac{${k}}{${m}}} \\approx ${omega.toFixed(2)}\\text{ rad/s} \\implies T = \\frac{2\\pi}{\\omega} \\approx ${T.toFixed(4)}\\text{ s}`
      };
    }
  },
  {
    id: "calc-amplitude",
    name: "Hệ thức độc lập tính Biên độ A",
    desc: "Tính biên độ A khi biết li độ x, vận tốc v và tần số góc ω",
    formula: "A = \\sqrt{x^2 + \\left(\\frac{v}{\\omega}\\right)^2}",
    inputs: [
      { id: "x", label: "Li độ tức thời x (cm)", default: 3, unit: "cm" },
      { id: "v", label: "Vận tốc tức thời v (cm/s)", default: 40, unit: "cm/s" },
      { id: "omega", label: "Tần số góc ω (rad/s)", default: 10, unit: "rad/s" }
    ],
    calculate: (vals) => {
      const { x, v, omega } = vals;
      if (omega <= 0) return { error: "Tần số góc ω phải > 0" };
      const A = Math.sqrt(x * x + (v / omega) * (v / omega));
      const vmax = omega * A;
      const amax = omega * omega * A;
      return {
        results: [
          { label: "Biên độ dao động (A)", value: A.toFixed(2), unit: "cm" },
          { label: "Vận tốc cực đại (v_max)", value: vmax.toFixed(2), unit: "cm/s" },
          { label: "Gia tốc cực đại (a_max)", value: amax.toFixed(2), unit: "cm/s²" }
        ],
        step: `A = \\sqrt{${x}^2 + \\left(\\frac{${v}}{${omega}}\\right)^2} = \\sqrt{${(x*x).toFixed(2)} + ${((v/omega)**2).toFixed(2)}} = ${A.toFixed(2)}\\text{ cm}`
      };
    }
  },
  {
    id: "calc-wave",
    name: "Bước sóng và Tốc độ truyền sóng",
    desc: "Tính bước sóng λ từ tốc độ truyền sóng v và tần số f",
    formula: "\\lambda = \\frac{v}{f} = v \\cdot T",
    inputs: [
      { id: "v", label: "Tốc độ truyền sóng v (m/s)", default: 20, unit: "m/s" },
      { id: "f", label: "Tần số sóng f (Hz)", default: 50, unit: "Hz" }
    ],
    calculate: (vals) => {
      const { v, f } = vals;
      if (f <= 0 || v <= 0) return { error: "v và f phải > 0" };
      const lambda = v / f;
      const T = 1 / f;
      return {
        results: [
          { label: "Bước sóng (λ)", value: lambda.toFixed(4), unit: "m" },
          { label: "Bước sóng (λ)", value: (lambda * 100).toFixed(2), unit: "cm" },
          { label: "Chu kì sóng (T)", value: T.toFixed(4), unit: "s" },
          { label: "Khoảng cách giữa 2 nút/bụng liên tiếp", value: ((lambda * 100) / 2).toFixed(2), unit: "cm" }
        ],
        step: `\\lambda = \\frac{v}{f} = \\frac{${v}}{${f}} = ${lambda.toFixed(4)}\\text{ m} = ${(lambda*100).toFixed(2)}\\text{ cm}`
      };
    }
  },
  {
    id: "calc-young",
    name: "Khoảng vân giao thoa Young",
    desc: "Tính khoảng vân i và vị trí vân sáng / tối",
    formula: "i = \\frac{\\lambda D}{a}",
    inputs: [
      { id: "lambda", label: "Bước sóng λ (μm)", default: 0.6, unit: "μm" },
      { id: "D", label: "Khoảng cách đến màn D (m)", default: 2, unit: "m" },
      { id: "a", label: "Khoảng cách 2 khe a (mm)", default: 1, unit: "mm" }
    ],
    calculate: (vals) => {
      const { lambda, D, a } = vals;
      if (lambda <= 0 || D <= 0 || a <= 0) return { error: "Các thông số phải > 0" };
      // Khi lambda (μm), D (m), a (mm) thì i ra mm
      const i = (lambda * D) / a;
      return {
        results: [
          { label: "Khoảng vân (i)", value: i.toFixed(3), unit: "mm" },
          { label: "Vị trí vân sáng bậc 3 (x_s3 = 3i)", value: (3 * i).toFixed(3), unit: "mm" },
          { label: "Vị trí vân tối thứ 3 (x_t3 = 2.5i)", value: (2.5 * i).toFixed(3), unit: "mm" }
        ],
        step: `i = \\frac{\\lambda \\cdot D}{a} = \\frac{${lambda}\\,(\\mu\\text{m}) \\cdot ${D}\\,(\\text{m})}{${a}\\,(\\text{mm})} = ${i.toFixed(3)}\\text{ mm}`
      };
    }
  },
  {
    id: "calc-coulomb",
    name: "Lực tương tác tĩnh điện (Định luật Coulomb)",
    desc: "Tính lực hút / đẩy giữa hai điện tích điểm trong chân không",
    formula: "F = 9 \\cdot 10^9 \\cdot \\frac{|q_1 q_2|}{r^2}",
    inputs: [
      { id: "q1", label: "Điện tích q1 (μC, có thể âm)", default: 2, unit: "μC" },
      { id: "q2", label: "Điện tích q2 (μC, có thể âm)", default: -4, unit: "μC" },
      { id: "r", label: "Khoảng cách r (cm)", default: 10, unit: "cm" }
    ],
    calculate: (vals) => {
      const { q1, q2, r } = vals;
      if (r <= 0) return { error: "Khoảng cách r phải > 0" };
      const q1_C = q1 * 1e-6;
      const q2_C = q2 * 1e-6;
      const r_m = r * 0.01;
      const k = 9e9;
      const F = (k * Math.abs(q1_C * q2_C)) / (r_m * r_m);
      const isAttract = (q1 * q2 < 0);
      return {
        results: [
          { label: "Độ lớn lực điện (F)", value: F.toFixed(3), unit: "N" },
          { label: "Bản chất lực tương tác", value: isAttract ? "Lực Hút (trái dấu)" : "Lực Đẩy (cùng dấu)", unit: "" }
        ],
        step: `F = 9\\cdot 10^9 \\cdot \\frac{|${q1}\\cdot 10^{-6} \\cdot ${q2}\\cdot 10^{-6}|}{(${r_m})^2} = ${F.toFixed(3)}\\text{ N}`
      };
    }
  },
  {
    id: "calc-ohm",
    name: "Định luật Ôm cho toàn mạch",
    desc: "Tính cường độ dòng điện I, hiệu điện thế mạch ngoài U_N và hiệu suất H",
    formula: "I = \\frac{\\mathcal{E}}{R_N + r} \\quad ; \\quad U_N = I \\cdot R_N",
    inputs: [
      { id: "E", label: "Suất điện động E (V)", default: 12, unit: "V" },
      { id: "r", label: "Điện trở trong r (Ω)", default: 1, unit: "Ω" },
      { id: "R", label: "Điện trở mạch ngoài R_N (Ω)", default: 5, unit: "Ω" }
    ],
    calculate: (vals) => {
      const { E, r, R } = vals;
      if (r < 0 || R < 0 || (R + r) <= 0) return { error: "Điện trở không thể âm" };
      const I = E / (R + r);
      const U = I * R;
      const P_N = I * I * R;
      const H = (R / (R + r)) * 100;
      return {
        results: [
          { label: "Cường độ dòng điện (I)", value: I.toFixed(3), unit: "A" },
          { label: "Hiệu điện thế mạch ngoài (U_N)", value: U.toFixed(3), unit: "V" },
          { label: "Công suất mạch ngoài (P_N)", value: P_N.toFixed(3), unit: "W" },
          { label: "Hiệu suất nguồn (H)", value: H.toFixed(1), unit: "%" }
        ],
        step: `I = \\frac{\\mathcal{E}}{R_N + r} = \\frac{${E}}{${R} + ${r}} = ${I.toFixed(3)}\\text{ A} \\implies U_N = ${I.toFixed(3)} \\times ${R} = ${U.toFixed(3)}\\text{ V}`
      };
    }
  }
];

