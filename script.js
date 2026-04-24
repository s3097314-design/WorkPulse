// =====================
// CONFIG
// =====================
const HR_SECRET_CODE = "HRCODE2024";
const RETIREMENT_AGE = 62;
const RETIREMENT_WARN_YEARS = 5;
const MAX_FILE_SIZE = 4 * 1024 * 1024;

// =====================
// TRANSLATIONS
// =====================
const translations = {
  en: {
    nav_employee: "Employee Panel", nav_hr: "HR Dashboard",
    panel_title: "Employee Panel", panel_subtitle: "Your daily workspace — mood, vacation, and more.",
    mood_title: "Daily Mood", mood_desc: "How are you feeling today?",
    mood_sad: "Sad", mood_neutral: "Neutral", mood_happy: "Happy", mood_submit: "Submit Mood",
    vacation_title: "Vacation Request", vacation_desc: "Submit a leave request to HR.",
    vacation_reason_placeholder: "Reason for vacation...", vacation_submit: "Send Request",
    from_label: "From", to_label: "To",
    mission_title: "Mission Request", mission_desc: "Submit a work assignment or business trip request.",
    mission_destination_label: "Destination", mission_destination_placeholder: "City / location",
    mission_reason_placeholder: "Purpose of mission...", mission_submit: "Submit Mission",
    feedback_mission: "Mission request sent!",
    just_title: "Submit Justification", just_desc: "Upload or take a photo of your medical certificate or other proof of absence.",
    just_reason_placeholder: "Reason (illness, appointment, etc.)...",
    just_file_label: "Photo of certificate", just_choose_file: "Choose photo or take one",
    just_submit: "Submit Justification", feedback_just: "Justification submitted!",
    err_just_reason: "Please enter a reason.",
    err_file_too_big: "File too big (max 4MB).",
    complaint_title: "Anonymous Complaint", complaint_desc: "Submit feedback anonymously. Your identity is never stored.",
    complaint_placeholder: "Write your complaint or suggestion...", complaint_submit: "Submit Anonymously",
    chat_title: "Message HR", chat_placeholder: "Type your message...", chat_send: "Send",
    hr_reply_placeholder: "Reply to employee...", hr_reply_btn: "Reply",
    hr_title: "HR Dashboard", hr_subtitle: "Monitor team wellbeing and incoming requests.",
    burnout_warning: "Burnout Risk Detected! Average mood is critically low. Take action now.",
    stat_avg_mood: "Average Mood", stat_score: "Mood Score",
    stat_vacations: "Vacation Requests", stat_complaints: "Anonymous Reports",
    stat_employees: "Employees", stat_on_vacation: "On Vacation", stat_on_mission: "On Mission",
    stat_pending_requests: "Pending Requests",
    hr_vacation_list: "Vacation Requests", hr_complaints_list: "Anonymous Complaints",
    hr_chat_list: "Employee Messages", hr_mood_log: "Mood Log",
    hr_missions_list: "Mission Requests", hr_just_list: "Absence Justifications",
    hr_directory: "Employee Directory", hr_retirement: "Approaching Retirement",
    clear_all: "Clear All Data", empty: "No data yet.",
    feedback_mood: "Mood submitted! Thank you.", feedback_vacation: "Vacation request sent!",
    feedback_complaint: "Complaint submitted anonymously.",
    err_select_mood: "Please select a mood first.",
    err_fill_fields: "Please fill in all required fields.",
    err_complaint_empty: "Please write something before submitting.",
    login_title: "Welcome Back", login_sub: "Sign in to your account",
    login_id_label: "Email or Phone Number", login_id_placeholder: "Email or phone number",
    login_pass_label: "Password", login_pass_placeholder: "Password",
    remember_me: "Remember me", login_btn: "Sign In",
    no_account: "Don't have an account?", go_signup: "Create one",
    signup_title: "Create Account", signup_sub: "Join your team on WorkPulse",
    signup_name_label: "Full Name", signup_name_placeholder: "Your full name",
    signup_id_label: "Email or Phone Number", signup_id_placeholder: "Email or phone number",
    signup_pass_label: "Password", signup_pass_placeholder: "Create a password",
    signup_dob_label: "Date of Birth",
    signup_role_label: "Account Type", role_employee: "Employee", role_hr: "HR Manager",
    hr_code_label: "HR Access Code", hr_code_placeholder: "Enter HR access code",
    hr_code_hint: "Ask your HR administrator for the access code.",
    signup_btn: "Create Account", have_account: "Already have an account?", go_login: "Sign in",
    logout: "Logout",
    err_login_invalid: "Incorrect email/phone or password.",
    err_signup_exists: "This email/phone is already registered.",
    err_signup_empty: "Please fill in all fields.",
    err_hr_code: "Invalid HR access code.",
    err_pass_short: "Password must be at least 6 characters.",
    forgot_password: "Forgot password?",
    forgot_title: "Reset Password",
    forgot_sub: "Enter your email/phone and choose a new password.",
    forgot_new_pass_label: "New Password",
    forgot_new_pass_placeholder: "New password (min 6 chars)",
    forgot_btn: "Reset Password",
    back_to_login: "← Back to login",
    err_account_not_found: "No account found with that email/phone.",
    forgot_success: "Password reset! You can now log in with your new password.",
    confirm_title: "Are you sure?", confirm_cancel: "Cancel", confirm_yes: "Yes, confirm",
    confirm_clear_all: "Clear ALL data for ALL employees? This cannot be undone.",
    confirm_delete_my_account: "Delete your account permanently? This cannot be undone.",
    confirm_delete_user: "Delete account for {name}? This cannot be undone.",
    confirm_decline_vacation: "Decline this vacation request?",
    confirm_decline_mission: "Decline this mission request?",
    account_title: "My Account", save_btn: "Save",
    name_label: "Full Name", cur_pass_label: "Current Password", new_pass_label: "New Password",
    change_pass_btn: "Change Password", delete_my_acct: "🗑 Delete My Account",
    manage_users: "Manage Employee Accounts",
    msg_name_updated: "Name updated!", msg_dob_updated: "Date of birth updated!",
    msg_pass_changed: "Password changed!",
    err_name_empty: "Name cannot be empty.",
    err_pass_fields: "Fill in both fields.", err_cur_pass_wrong: "Current password is incorrect.",
    no_employee_accounts: "No employee accounts.", delete_btn: "Delete",
    approve_btn: "Approve", decline_btn: "Decline",
    status_pending: "Pending", status_approved: "Approved", status_declined: "Declined",
    status_working: "Working", status_on_vacation: "On Vacation", status_on_mission: "On Mission",
    view_attachment: "View attachment", no_attachment: "No attachment",
    age_label: "Age", years_unit: "yrs", retires_in: "Retires in {n} yrs", at_retirement_age: "At retirement age",
    no_dob_set: "No date of birth set"
  },
  fr: {
    nav_employee: "Espace Employé", nav_hr: "Tableau RH",
    panel_title: "Espace Employé", panel_subtitle: "Votre espace quotidien — humeur, congés, et plus.",
    mood_title: "Humeur du Jour", mood_desc: "Comment vous sentez-vous aujourd'hui ?",
    mood_sad: "Triste", mood_neutral: "Neutre", mood_happy: "Heureux", mood_submit: "Envoyer l'Humeur",
    vacation_title: "Demande de Congé", vacation_desc: "Envoyez une demande de congé aux RH.",
    vacation_reason_placeholder: "Raison du congé...", vacation_submit: "Envoyer la Demande",
    from_label: "Du", to_label: "Au",
    mission_title: "Demande de Mission", mission_desc: "Soumettez une mission de travail ou un voyage d'affaires.",
    mission_destination_label: "Destination", mission_destination_placeholder: "Ville / lieu",
    mission_reason_placeholder: "Objet de la mission...", mission_submit: "Soumettre la Mission",
    feedback_mission: "Demande de mission envoyée !",
    just_title: "Soumettre une Justification", just_desc: "Téléchargez ou prenez en photo votre certificat médical ou un autre justificatif d'absence.",
    just_reason_placeholder: "Raison (maladie, rendez-vous, etc.)...",
    just_file_label: "Photo du certificat", just_choose_file: "Choisir une photo ou en prendre une",
    just_submit: "Soumettre la Justification", feedback_just: "Justification envoyée !",
    err_just_reason: "Veuillez saisir une raison.",
    err_file_too_big: "Fichier trop volumineux (max 4 Mo).",
    complaint_title: "Plainte Anonyme", complaint_desc: "Soumettez vos commentaires anonymement.",
    complaint_placeholder: "Écrivez votre plainte ou suggestion...", complaint_submit: "Soumettre Anonymement",
    chat_title: "Message aux RH", chat_placeholder: "Tapez votre message...", chat_send: "Envoyer",
    hr_reply_placeholder: "Répondre à l'employé...", hr_reply_btn: "Répondre",
    hr_title: "Tableau de Bord RH", hr_subtitle: "Surveillez le bien-être de l'équipe.",
    burnout_warning: "Risque d'épuisement détecté ! L'humeur moyenne est critique.",
    stat_avg_mood: "Humeur Moyenne", stat_score: "Score d'Humeur",
    stat_vacations: "Demandes de Congé", stat_complaints: "Rapports Anonymes",
    stat_employees: "Employés", stat_on_vacation: "En Congé", stat_on_mission: "En Mission",
    stat_pending_requests: "Demandes en Attente",
    hr_vacation_list: "Demandes de Congé", hr_complaints_list: "Plaintes Anonymes",
    hr_chat_list: "Messages Employés", hr_mood_log: "Journal des Humeurs",
    hr_missions_list: "Demandes de Mission", hr_just_list: "Justificatifs d'Absence",
    hr_directory: "Annuaire des Employés", hr_retirement: "Retraite Imminente",
    clear_all: "Effacer Toutes les Données", empty: "Aucune donnée.",
    feedback_mood: "Humeur enregistrée ! Merci.", feedback_vacation: "Demande de congé envoyée !",
    feedback_complaint: "Plainte soumise anonymement.",
    err_select_mood: "Veuillez sélectionner une humeur.",
    err_fill_fields: "Veuillez remplir tous les champs requis.",
    err_complaint_empty: "Veuillez écrire quelque chose.",
    login_title: "Bon Retour", login_sub: "Connectez-vous à votre compte",
    login_id_label: "Email ou Téléphone", login_id_placeholder: "Email ou téléphone",
    login_pass_label: "Mot de Passe", login_pass_placeholder: "Mot de passe",
    remember_me: "Se souvenir de moi", login_btn: "Se Connecter",
    no_account: "Pas de compte ?", go_signup: "Créer un compte",
    signup_title: "Créer un Compte", signup_sub: "Rejoignez votre équipe sur WorkPulse",
    signup_name_label: "Nom Complet", signup_name_placeholder: "Votre nom complet",
    signup_id_label: "Email ou Téléphone", signup_id_placeholder: "Email ou téléphone",
    signup_pass_label: "Mot de Passe", signup_pass_placeholder: "Créer un mot de passe",
    signup_dob_label: "Date de Naissance",
    signup_role_label: "Type de Compte", role_employee: "Employé", role_hr: "Responsable RH",
    hr_code_label: "Code d'Accès RH", hr_code_placeholder: "Code d'accès RH",
    hr_code_hint: "Demandez le code d'accès à votre administrateur RH.",
    signup_btn: "Créer le Compte", have_account: "Déjà un compte ?", go_login: "Se connecter",
    logout: "Déconnexion",
    err_login_invalid: "Email/téléphone ou mot de passe incorrect.",
    err_signup_exists: "Cet email/téléphone est déjà enregistré.",
    err_signup_empty: "Veuillez remplir tous les champs.",
    err_hr_code: "Code d'accès RH invalide.",
    err_pass_short: "Le mot de passe doit contenir au moins 6 caractères.",
    forgot_password: "Mot de passe oublié ?",
    forgot_title: "Réinitialiser le mot de passe",
    forgot_sub: "Entrez votre email/téléphone et choisissez un nouveau mot de passe.",
    forgot_new_pass_label: "Nouveau Mot de Passe",
    forgot_new_pass_placeholder: "Nouveau mot de passe (min 6 caractères)",
    forgot_btn: "Réinitialiser",
    back_to_login: "← Retour à la connexion",
    err_account_not_found: "Aucun compte trouvé avec cet email/téléphone.",
    forgot_success: "Mot de passe réinitialisé ! Vous pouvez maintenant vous connecter.",
    confirm_title: "Êtes-vous sûr ?", confirm_cancel: "Annuler", confirm_yes: "Oui, confirmer",
    confirm_clear_all: "Effacer TOUTES les données de TOUS les employés ? Action irréversible.",
    confirm_delete_my_account: "Supprimer définitivement votre compte ? Action irréversible.",
    confirm_delete_user: "Supprimer le compte de {name} ? Action irréversible.",
    confirm_decline_vacation: "Refuser cette demande de congé ?",
    confirm_decline_mission: "Refuser cette demande de mission ?",
    account_title: "Mon Compte", save_btn: "Enregistrer",
    name_label: "Nom Complet", cur_pass_label: "Mot de Passe Actuel", new_pass_label: "Nouveau Mot de Passe",
    change_pass_btn: "Changer le Mot de Passe", delete_my_acct: "🗑 Supprimer Mon Compte",
    manage_users: "Gérer les Comptes Employés",
    msg_name_updated: "Nom mis à jour !", msg_dob_updated: "Date de naissance mise à jour !",
    msg_pass_changed: "Mot de passe modifié !",
    err_name_empty: "Le nom ne peut pas être vide.",
    err_pass_fields: "Remplissez les deux champs.", err_cur_pass_wrong: "Mot de passe actuel incorrect.",
    no_employee_accounts: "Aucun compte employé.", delete_btn: "Supprimer",
    approve_btn: "Approuver", decline_btn: "Refuser",
    status_pending: "En Attente", status_approved: "Approuvée", status_declined: "Refusée",
    status_working: "Au Travail", status_on_vacation: "En Congé", status_on_mission: "En Mission",
    view_attachment: "Voir la pièce jointe", no_attachment: "Aucune pièce jointe",
    age_label: "Âge", years_unit: "ans", retires_in: "Retraite dans {n} ans", at_retirement_age: "Âge de retraite atteint",
    no_dob_set: "Date de naissance non définie"
  },
  ar: {
    nav_employee: "لوحة الموظف", nav_hr: "لوحة الموارد البشرية",
    panel_title: "لوحة الموظف", panel_subtitle: "مساحتك اليومية — المزاج، الإجازات، والمزيد.",
    mood_title: "مزاج اليوم", mood_desc: "كيف حالك اليوم؟",
    mood_sad: "حزين", mood_neutral: "محايد", mood_happy: "سعيد", mood_submit: "إرسال المزاج",
    vacation_title: "طلب إجازة", vacation_desc: "أرسل طلب إجازة إلى الموارد البشرية.",
    vacation_reason_placeholder: "سبب الإجازة...", vacation_submit: "إرسال الطلب",
    from_label: "من", to_label: "إلى",
    mission_title: "طلب مهمة", mission_desc: "أرسل طلب مهمة عمل أو سفر مهني.",
    mission_destination_label: "الوجهة", mission_destination_placeholder: "المدينة / الموقع",
    mission_reason_placeholder: "الغرض من المهمة...", mission_submit: "إرسال المهمة",
    feedback_mission: "تم إرسال طلب المهمة!",
    just_title: "إرسال مبرر", just_desc: "حمّل أو التقط صورة لشهادتك الطبية أو أي مبرر آخر للغياب.",
    just_reason_placeholder: "السبب (مرض، موعد، إلخ)...",
    just_file_label: "صورة الشهادة", just_choose_file: "اختر صورة أو التقط واحدة",
    just_submit: "إرسال المبرر", feedback_just: "تم إرسال المبرر!",
    err_just_reason: "الرجاء إدخال سبب.",
    err_file_too_big: "الملف كبير جداً (الحد الأقصى 4 ميغابايت).",
    complaint_title: "شكوى مجهولة", complaint_desc: "أرسل ملاحظاتك بشكل مجهول.",
    complaint_placeholder: "اكتب شكواك أو اقتراحك...", complaint_submit: "إرسال بشكل مجهول",
    chat_title: "مراسلة الموارد البشرية", chat_placeholder: "اكتب رسالتك...", chat_send: "إرسال",
    hr_reply_placeholder: "الرد على الموظف...", hr_reply_btn: "رد",
    hr_title: "لوحة الموارد البشرية", hr_subtitle: "راقب رفاهية الفريق والطلبات الواردة.",
    burnout_warning: "تحذير: خطر الإرهاق! متوسط المزاج منخفض جداً.",
    stat_avg_mood: "متوسط المزاج", stat_score: "درجة المزاج",
    stat_vacations: "طلبات الإجازة", stat_complaints: "التقارير المجهولة",
    stat_employees: "الموظفون", stat_on_vacation: "في إجازة", stat_on_mission: "في مهمة",
    stat_pending_requests: "طلبات قيد الانتظار",
    hr_vacation_list: "طلبات الإجازة", hr_complaints_list: "الشكاوى المجهولة",
    hr_chat_list: "رسائل الموظفين", hr_mood_log: "سجل المزاج",
    hr_missions_list: "طلبات المهام", hr_just_list: "مبررات الغياب",
    hr_directory: "دليل الموظفين", hr_retirement: "قرب التقاعد",
    clear_all: "مسح جميع البيانات", empty: "لا توجد بيانات بعد.",
    feedback_mood: "تم إرسال مزاجك! شكراً.", feedback_vacation: "تم إرسال طلب الإجازة!",
    feedback_complaint: "تم إرسال الشكوى بشكل مجهول.",
    err_select_mood: "الرجاء اختيار مزاج أولاً.",
    err_fill_fields: "الرجاء ملء جميع الحقول المطلوبة.",
    err_complaint_empty: "الرجاء كتابة شيء قبل الإرسال.",
    login_title: "مرحباً بعودتك", login_sub: "سجّل الدخول إلى حسابك",
    login_id_label: "البريد الإلكتروني أو رقم الهاتف", login_id_placeholder: "البريد أو الهاتف",
    login_pass_label: "كلمة المرور", login_pass_placeholder: "كلمة المرور",
    remember_me: "تذكرني", login_btn: "تسجيل الدخول",
    no_account: "ليس لديك حساب؟", go_signup: "أنشئ حساباً",
    signup_title: "إنشاء حساب", signup_sub: "انضم إلى فريقك على WorkPulse",
    signup_name_label: "الاسم الكامل", signup_name_placeholder: "اسمك الكامل",
    signup_id_label: "البريد الإلكتروني أو الهاتف", signup_id_placeholder: "البريد أو الهاتف",
    signup_pass_label: "كلمة المرور", signup_pass_placeholder: "أنشئ كلمة مرور",
    signup_dob_label: "تاريخ الميلاد",
    signup_role_label: "نوع الحساب", role_employee: "موظف", role_hr: "مدير الموارد البشرية",
    hr_code_label: "رمز الوصول", hr_code_placeholder: "أدخل رمز الوصول",
    hr_code_hint: "اطلب رمز الوصول من مسؤول الموارد البشرية.",
    signup_btn: "إنشاء الحساب", have_account: "لديك حساب؟", go_login: "سجّل الدخول",
    logout: "تسجيل الخروج",
    err_login_invalid: "البريد/الهاتف أو كلمة المرور غير صحيحة.",
    err_signup_exists: "هذا البريد/الهاتف مسجّل مسبقاً.",
    err_signup_empty: "الرجاء ملء جميع الحقول.",
    err_hr_code: "رمز الوصول غير صحيح.",
    err_pass_short: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.",
    forgot_password: "نسيت كلمة المرور؟",
    forgot_title: "إعادة تعيين كلمة المرور",
    forgot_sub: "أدخل بريدك/هاتفك واختر كلمة مرور جديدة.",
    forgot_new_pass_label: "كلمة المرور الجديدة",
    forgot_new_pass_placeholder: "كلمة مرور جديدة (6 أحرف على الأقل)",
    forgot_btn: "إعادة التعيين",
    back_to_login: "← العودة إلى تسجيل الدخول",
    err_account_not_found: "لا يوجد حساب بهذا البريد/الهاتف.",
    forgot_success: "تم إعادة تعيين كلمة المرور! يمكنك الآن تسجيل الدخول.",
    confirm_title: "هل أنت متأكد؟", confirm_cancel: "إلغاء", confirm_yes: "نعم، تأكيد",
    confirm_clear_all: "مسح جميع بيانات جميع الموظفين؟ لا يمكن التراجع.",
    confirm_delete_my_account: "حذف حسابك نهائياً؟ لا يمكن التراجع.",
    confirm_delete_user: "حذف حساب {name}؟ لا يمكن التراجع.",
    confirm_decline_vacation: "رفض طلب الإجازة هذا؟",
    confirm_decline_mission: "رفض طلب المهمة هذا؟",
    account_title: "حسابي", save_btn: "حفظ",
    name_label: "الاسم الكامل", cur_pass_label: "كلمة المرور الحالية", new_pass_label: "كلمة المرور الجديدة",
    change_pass_btn: "تغيير كلمة المرور", delete_my_acct: "🗑 حذف حسابي",
    manage_users: "إدارة حسابات الموظفين",
    msg_name_updated: "تم تحديث الاسم!", msg_dob_updated: "تم تحديث تاريخ الميلاد!",
    msg_pass_changed: "تم تغيير كلمة المرور!",
    err_name_empty: "لا يمكن أن يكون الاسم فارغاً.",
    err_pass_fields: "املأ كلا الحقلين.", err_cur_pass_wrong: "كلمة المرور الحالية غير صحيحة.",
    no_employee_accounts: "لا توجد حسابات موظفين.", delete_btn: "حذف",
    approve_btn: "موافقة", decline_btn: "رفض",
    status_pending: "قيد الانتظار", status_approved: "تمت الموافقة", status_declined: "مرفوضة",
    status_working: "يعمل", status_on_vacation: "في إجازة", status_on_mission: "في مهمة",
    view_attachment: "عرض المرفق", no_attachment: "لا يوجد مرفق",
    age_label: "العمر", years_unit: "سنة", retires_in: "يتقاعد خلال {n} سنوات", at_retirement_age: "بلغ سن التقاعد",
    no_dob_set: "تاريخ الميلاد غير محدد"
  }
};

// =====================
// STATE
// =====================
let currentLang = "en";
let selectedMood = null;
let currentUser = null;
let activeHrThread = null;
let pendingJustFile = null;
const MOOD_SCORES = { sad: 1, neutral: 2, happy: 3 };
const MOOD_EMOJIS = { sad: "😢", neutral: "😐", happy: "😄" };

// =====================
// THEME
// =====================
function toggleTheme() {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("wp_theme", next);
  updateThemeIcons(next);
}
function updateThemeIcons(theme) {
  document.querySelectorAll(".theme-toggle").forEach(btn => btn.textContent = theme === "dark" ? "☀️" : "🌙");
}
function loadTheme() {
  const saved = localStorage.getItem("wp_theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcons(saved);
}

// =====================
// LANGUAGE
// =====================
function t(key, params) {
  let str = (translations[currentLang] && translations[currentLang][key]) || key;
  if (params) {
    Object.keys(params).forEach(k => { str = str.replace("{" + k + "}", params[k]); });
  }
  return str;
}
function setLang(lang) {
  currentLang = lang;
  const isRTL = lang === "ar";
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key] !== undefined) el.placeholder = translations[lang][key];
  });
  if (currentUser && document.getElementById("app").classList.contains("hidden") === false) {
    if (currentUser.role === "hr") refreshDashboard();
    else renderEmployeeChat();
  }
}

// =====================
// AUTH PANELS
// =====================
function showAuthPanel(panel) {
  document.getElementById("login-panel").classList.toggle("hidden", panel !== "login");
  document.getElementById("signup-panel").classList.toggle("hidden", panel !== "signup");
  const forgotEl = document.getElementById("forgot-panel");
  if (forgotEl) forgotEl.classList.toggle("hidden", panel !== "forgot");
  ["login-error", "signup-error", "forgot-error"].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.textContent = ""; el.classList.add("hidden"); }
  });
}

function handleForgotPassword() {
  const identifier = document.getElementById("forgot-id").value.trim().toLowerCase();
  const newPass = document.getElementById("forgot-pass").value;
  if (!identifier || !newPass) { showAuthError("forgot-error", t("err_signup_empty")); return; }
  if (newPass.length < 6) { showAuthError("forgot-error", t("err_pass_short")); return; }
  const accounts = getAccounts();
  const idx = accounts.findIndex(a => a.id === identifier);
  if (idx === -1) { showAuthError("forgot-error", t("err_account_not_found")); return; }
  accounts[idx].password = newPass;
  saveAccounts(accounts);
  document.getElementById("forgot-id").value = "";
  document.getElementById("forgot-pass").value = "";
  document.getElementById("forgot-pass").type = "password";
  showAuthPanel("login");
  document.getElementById("login-id").value = identifier;
  alert(t("forgot_success"));
}

function showAuthError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.classList.remove("hidden"); }
}
function toggleHrCode() {
  document.getElementById("hr-code-group").classList.toggle("hidden", document.getElementById("signup-role").value !== "hr");
}
function toggleEye(inputId, btn) {
  const input = document.getElementById(inputId);
  if (input.type === "password") { input.type = "text"; btn.textContent = "🙈"; }
  else { input.type = "password"; btn.textContent = "👁"; }
}

// =====================
// ACCOUNTS
// =====================
function getAccounts() {
  try { return JSON.parse(localStorage.getItem("wp_accounts")) || []; } catch { return []; }
}
function saveAccounts(arr) { localStorage.setItem("wp_accounts", JSON.stringify(arr)); }
function findAccount(id) { return getAccounts().find(a => a.id === id.trim().toLowerCase()); }

// =====================
// LOGIN / SIGNUP / SESSION
// =====================
function handleLogin() {
  const identifier = document.getElementById("login-id").value.trim().toLowerCase();
  const password = document.getElementById("login-pass").value;
  const remember = document.getElementById("remember-me").checked;
  if (!identifier || !password) { showAuthError("login-error", t("err_login_invalid")); return; }
  const account = findAccount(identifier);
  if (!account || account.password !== password) { showAuthError("login-error", t("err_login_invalid")); return; }
  startSession(account, remember);
}

function handleSignup() {
  const name = document.getElementById("signup-name").value.trim();
  const identifier = document.getElementById("signup-id").value.trim().toLowerCase();
  const password = document.getElementById("signup-pass").value;
  const dob = document.getElementById("signup-dob").value;
  const role = document.getElementById("signup-role").value;
  const hrCode = document.getElementById("hr-code").value;

  if (!name || !identifier || !password) { showAuthError("signup-error", t("err_signup_empty")); return; }
  if (password.length < 6) { showAuthError("signup-error", t("err_pass_short")); return; }
  if (role === "hr" && hrCode !== HR_SECRET_CODE) { showAuthError("signup-error", t("err_hr_code")); return; }

  const accounts = getAccounts();
  if (accounts.find(a => a.id === identifier)) { showAuthError("signup-error", t("err_signup_exists")); return; }

  const newAccount = { id: identifier, name, password, role, dob: dob || null, createdAt: new Date().toISOString() };
  accounts.push(newAccount);
  saveAccounts(accounts);
  startSession(newAccount, false);
}

function startSession(account, remember) {
  currentUser = account;
  const data = JSON.stringify({ id: account.id, role: account.role, name: account.name });
  if (remember) { localStorage.setItem("wp_session", data); }
  else { sessionStorage.setItem("wp_session", data); localStorage.removeItem("wp_session"); }
  launchApp(account);
}

function loadSession() {
  try {
    const raw = localStorage.getItem("wp_session") || sessionStorage.getItem("wp_session");
    if (!raw) return null;
    return findAccount(JSON.parse(raw).id) || null;
  } catch { return null; }
}

function handleLogout() {
  localStorage.removeItem("wp_session");
  sessionStorage.removeItem("wp_session");
  currentUser = null; selectedMood = null; activeHrThread = null;
  document.getElementById("app").classList.add("hidden");
  document.getElementById("auth-screen").classList.remove("hidden");
  showAuthPanel("login");
  document.getElementById("login-id").value = "";
  document.getElementById("login-pass").value = "";
  document.getElementById("login-pass").type = "password";
  document.getElementById("remember-me").checked = false;
}

// =====================
// LAUNCH APP
// =====================
function launchApp(account) {
  document.getElementById("auth-screen").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  const initials = account.name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
  document.getElementById("user-avatar").textContent = initials;
  document.getElementById("user-name-display").textContent = account.name;

  if (account.role === "hr") {
    document.getElementById("btn-hr").classList.remove("hidden");
    document.getElementById("btn-employee").classList.add("hidden");
    showSection("hr");
  } else {
    document.getElementById("btn-hr").classList.add("hidden");
    document.getElementById("btn-employee").classList.remove("hidden");
    showSection("employee");
    renderEmployeeChat();
  }
}

// =====================
// NAVIGATION
// =====================
function showSection(name) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("section-" + name).classList.add("active");
  const btn = document.getElementById("btn-" + name);
  if (btn) btn.classList.add("active");
  if (name === "hr") refreshDashboard();
}

// =====================
// MOOD
// =====================
function selectMood(mood) {
  selectedMood = mood;
  document.querySelectorAll(".mood-btn").forEach(btn => {
    btn.classList.toggle("selected", btn.getAttribute("data-mood") === mood);
  });
}
function submitMood() {
  if (!selectedMood) { showFeedback("mood-feedback", t("err_select_mood"), "error"); return; }
  const moods = getAllMoods();
  moods.push({ userId: currentUser.id, userName: currentUser.name, mood: selectedMood, score: MOOD_SCORES[selectedMood], time: new Date().toLocaleString() });
  saveStorage("moods", moods);
  showFeedback("mood-feedback", t("feedback_mood"), "success");
  selectedMood = null;
  document.querySelectorAll(".mood-btn").forEach(btn => btn.classList.remove("selected"));
}

// =====================
// VACATION
// =====================
function submitVacation() {
  const from = document.getElementById("vacation-from").value;
  const to = document.getElementById("vacation-to").value;
  const reason = document.getElementById("vacation-reason").value.trim();
  if (!from || !to || !reason) { showFeedback("vacation-feedback", t("err_fill_fields"), "error"); return; }
  const reqs = getAllVacations();
  reqs.push({
    id: Date.now() + "_" + Math.random().toString(36).substr(2, 5),
    userId: currentUser.id, name: currentUser.name, from, to, reason,
    status: "pending", time: new Date().toLocaleString()
  });
  saveStorage("vacations", reqs);
  document.getElementById("vacation-from").value = "";
  document.getElementById("vacation-to").value = "";
  document.getElementById("vacation-reason").value = "";
  showFeedback("vacation-feedback", t("feedback_vacation"), "success");
}

function setVacationStatus(reqId, status) {
  const reqs = getAllVacations();
  const idx = reqs.findIndex(r => r.id === reqId);
  if (idx === -1) return;
  reqs[idx].status = status;
  reqs[idx].decidedAt = new Date().toLocaleString();
  saveStorage("vacations", reqs);
  refreshDashboard();
}
function approveVacation(reqId) { setVacationStatus(reqId, "approved"); }
function declineVacation(reqId) {
  showConfirm(t("confirm_decline_vacation"), () => setVacationStatus(reqId, "declined"));
}

// =====================
// MISSION
// =====================
function submitMission() {
  const destination = document.getElementById("mission-destination").value.trim();
  const from = document.getElementById("mission-from").value;
  const to = document.getElementById("mission-to").value;
  const reason = document.getElementById("mission-reason").value.trim();
  if (!destination || !from || !to || !reason) { showFeedback("mission-feedback", t("err_fill_fields"), "error"); return; }
  const list = getAllMissions();
  list.push({
    id: Date.now() + "_" + Math.random().toString(36).substr(2, 5),
    userId: currentUser.id, name: currentUser.name, destination, from, to, reason,
    status: "pending", time: new Date().toLocaleString()
  });
  saveStorage("missions", list);
  document.getElementById("mission-destination").value = "";
  document.getElementById("mission-from").value = "";
  document.getElementById("mission-to").value = "";
  document.getElementById("mission-reason").value = "";
  showFeedback("mission-feedback", t("feedback_mission"), "success");
}
function setMissionStatus(reqId, status) {
  const list = getAllMissions();
  const idx = list.findIndex(r => r.id === reqId);
  if (idx === -1) return;
  list[idx].status = status;
  list[idx].decidedAt = new Date().toLocaleString();
  saveStorage("missions", list);
  refreshDashboard();
}
function approveMission(reqId) { setMissionStatus(reqId, "approved"); }
function declineMission(reqId) {
  showConfirm(t("confirm_decline_mission"), () => setMissionStatus(reqId, "declined"));
}

// =====================
// JUSTIFICATION
// =====================
function onJustFilePick(event) {
  const file = event.target.files[0];
  const nameEl = document.getElementById("just-file-name");
  const previewEl = document.getElementById("just-preview");
  pendingJustFile = null;
  if (!file) { nameEl.textContent = t("just_choose_file"); previewEl.classList.add("hidden"); return; }
  if (file.size > MAX_FILE_SIZE) {
    showFeedback("just-feedback", t("err_file_too_big"), "error");
    event.target.value = "";
    nameEl.textContent = t("just_choose_file");
    previewEl.classList.add("hidden");
    return;
  }
  nameEl.textContent = file.name;
  const reader = new FileReader();
  reader.onload = function(e) {
    pendingJustFile = e.target.result;
    previewEl.src = e.target.result;
    previewEl.classList.remove("hidden");
  };
  reader.readAsDataURL(file);
}

function submitJustification() {
  const reason = document.getElementById("just-reason").value.trim();
  if (!reason) { showFeedback("just-feedback", t("err_just_reason"), "error"); return; }
  const list = getAllJustifications();
  list.push({
    id: Date.now() + "_" + Math.random().toString(36).substr(2, 5),
    userId: currentUser.id, name: currentUser.name, reason,
    file: pendingJustFile,
    time: new Date().toLocaleString()
  });
  try {
    saveStorage("justifications", list);
  } catch (e) {
    showFeedback("just-feedback", t("err_file_too_big"), "error");
    return;
  }
  document.getElementById("just-reason").value = "";
  document.getElementById("just-file").value = "";
  document.getElementById("just-file-name").textContent = t("just_choose_file");
  document.getElementById("just-preview").classList.add("hidden");
  pendingJustFile = null;
  showFeedback("just-feedback", t("feedback_just"), "success");
}

// =====================
// COMPLAINT
// =====================
function submitComplaint() {
  const text = document.getElementById("complaint-text").value.trim();
  if (!text) { showFeedback("complaint-feedback", t("err_complaint_empty"), "error"); return; }
  const list = getAllComplaints();
  list.push({ text, time: new Date().toLocaleString() });
  saveStorage("complaints", list);
  document.getElementById("complaint-text").value = "";
  showFeedback("complaint-feedback", t("feedback_complaint"), "success");
}

// =====================
// EMPLOYEE CHAT
// =====================
function sendChat() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if (!msg) return;
  const chats = getAllChats();
  chats.push({ userId: currentUser.id, userName: currentUser.name, msg, fromHR: false, time: new Date().toLocaleString() });
  saveStorage("chats", chats);
  input.value = "";
  renderEmployeeChat();
}

function renderEmployeeChat() {
  if (!currentUser) return;
  const chats = getAllChats();
  const myId = currentUser.id;
  const visible = chats.filter(c => (!c.fromHR && c.userId === myId) || (c.fromHR && c.toUserId === myId));
  renderChatMessages("chat-display", visible);
}

// =====================
// HR CHAT THREADS
// =====================
function initHrChatThreads() {
  const chats = getAllChats();
  const tabsEl = document.getElementById("hr-employee-tabs");
  const chatBox = document.getElementById("hr-chat-display");
  const replyRow = document.getElementById("hr-reply-row");

  const seen = {};
  const employees = [];
  chats.forEach(c => {
    if (!c.fromHR && !seen[c.userId]) {
      seen[c.userId] = true;
      employees.push({ userId: c.userId, userName: c.userName });
    }
  });

  if (employees.length === 0) {
    tabsEl.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>";
    chatBox.innerHTML = "";
    replyRow.classList.add("hidden");
    return;
  }

  tabsEl.innerHTML = "";
  employees.forEach(emp => {
    const btn = document.createElement("button");
    btn.className = "emp-tab" + (activeHrThread && activeHrThread.userId === emp.userId ? " active" : "");
    btn.textContent = emp.userName;
    btn.onclick = () => selectHrThread(emp.userId, emp.userName);
    tabsEl.appendChild(btn);
  });

  if (activeHrThread) {
    renderHrThread(activeHrThread.userId);
    replyRow.classList.remove("hidden");
  } else {
    chatBox.innerHTML = '<p class="empty-msg" style="padding:20px 0;text-align:center">← ' + escapeHtml(t("empty")) + "</p>";
    replyRow.classList.add("hidden");
  }
}

function selectHrThread(userId, userName) {
  activeHrThread = { userId, userName };
  initHrChatThreads();
}

function renderHrThread(userId) {
  const chats = getAllChats();
  const visible = chats.filter(c => (!c.fromHR && c.userId === userId) || (c.fromHR && c.toUserId === userId));
  renderChatMessages("hr-chat-display", visible);
}

function sendHrReply() {
  if (!activeHrThread) return;
  const input = document.getElementById("hr-reply-input");
  const msg = input.value.trim();
  if (!msg) return;
  const chats = getAllChats();
  chats.push({
    userId: "hr",
    userName: currentUser.name + " (HR)",
    msg, fromHR: true,
    toUserId: activeHrThread.userId,
    time: new Date().toLocaleString()
  });
  saveStorage("chats", chats);
  input.value = "";
  renderHrThread(activeHrThread.userId);
}

function renderChatMessages(containerId, msgs) {
  const box = document.getElementById(containerId);
  if (!box) return;
  box.innerHTML = "";
  if (!msgs || msgs.length === 0) {
    box.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>";
    return;
  }
  msgs.forEach(m => {
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble" + (m.fromHR ? " hr-reply" : "");
    const nameHtml = m.userName ? '<div class="bubble-name">' + escapeHtml(m.userName) + "</div>" : "";
    bubble.innerHTML = nameHtml + "<span>" + escapeHtml(m.msg) + '</span><div class="meta">' + m.time + "</div>";
    box.appendChild(bubble);
  });
  box.scrollTop = box.scrollHeight;
}

// =====================
// HELPERS: AGE / STATUS
// =====================
function calcAge(dob) {
  if (!dob) return null;
  const today = new Date();
  const birth = new Date(dob);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

function isDateInRange(today, from, to) {
  const d = today.getTime();
  return d >= new Date(from).getTime() && d <= new Date(to).getTime() + 86400000 - 1;
}

function getEmployeeStatus(userId) {
  const today = new Date();
  const onVac = getAllVacations().some(v => v.userId === userId && v.status === "approved" && isDateInRange(today, v.from, v.to));
  if (onVac) return "on_vacation";
  const onMis = getAllMissions().some(m => m.userId === userId && m.status === "approved" && isDateInRange(today, m.from, m.to));
  if (onMis) return "on_mission";
  return "working";
}

function statusLabel(status) {
  if (status === "on_vacation") return t("status_on_vacation");
  if (status === "on_mission") return t("status_on_mission");
  return t("status_working");
}
function statusClass(status) {
  if (status === "on_vacation") return "status-vacation";
  if (status === "on_mission") return "status-mission";
  return "status-working";
}

// =====================
// HR DASHBOARD
// =====================
function refreshDashboard() {
  const moods = getAllMoods();
  const vacations = getAllVacations();
  const missions = getAllMissions();
  const complaints = getAllComplaints();
  const justifications = getAllJustifications();
  const accounts = getAccounts();
  const employees = accounts.filter(a => a.role !== "hr");

  document.getElementById("stat-employees").textContent = employees.length;
  document.getElementById("stat-on-vacation").textContent = employees.filter(e => getEmployeeStatus(e.id) === "on_vacation").length;
  document.getElementById("stat-on-mission").textContent = employees.filter(e => getEmployeeStatus(e.id) === "on_mission").length;
  document.getElementById("stat-vacations").textContent = vacations.filter(v => v.status === "pending").length + missions.filter(m => m.status === "pending").length;
  document.getElementById("stat-complaints").textContent = complaints.length;

  if (moods.length === 0) {
    document.getElementById("stat-avg-mood").textContent = "—";
    document.getElementById("burnout-alert").classList.add("hidden");
  } else {
    const avg = moods.reduce((s, m) => s + m.score, 0) / moods.length;
    document.getElementById("stat-avg-mood").textContent = avg < 1.5 ? "😢" : avg < 2.5 ? "😐" : "😄";
    document.getElementById("burnout-alert").classList.toggle("hidden", avg >= 1.8);
  }

  renderVacations(vacations);
  renderMissions(missions);
  renderJustifications(justifications);
  renderDirectory(employees);
  renderRetirement(employees);

  renderList("hr-complaints", complaints, c =>
    "<span>" + escapeHtml(c.text) + '</span><div class="list-meta">' + c.time + "</div>"
  );
  renderList("hr-mood-log", moods, m =>
    "<strong>" + MOOD_EMOJIS[m.mood] + " " + escapeHtml(m.userName || "Employee") + "</strong>" +
    '<span style="margin-left:6px;color:var(--text-muted);font-size:12px">' + escapeHtml(m.mood) + "</span>" +
    '<div class="list-meta">' + m.time + "</div>"
  );

  initHrChatThreads();
}

function renderVacations(vacations) {
  const el = document.getElementById("hr-vacations");
  if (!vacations || vacations.length === 0) { el.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>"; return; }
  el.innerHTML = "";
  [...vacations].reverse().forEach(v => {
    const status = v.status || "pending";
    const div = document.createElement("div");
    div.className = "list-item";
    let actionsHtml = "";
    if (status === "pending") {
      actionsHtml =
        '<div class="action-row">' +
          '<button class="btn-mini btn-approve" onclick="approveVacation(\'' + v.id + '\')">✓ ' + escapeHtml(t("approve_btn")) + '</button>' +
          '<button class="btn-mini btn-decline" onclick="declineVacation(\'' + v.id + '\')">✗ ' + escapeHtml(t("decline_btn")) + '</button>' +
        '</div>';
    }
    div.innerHTML =
      '<div class="list-row-top">' +
        "<strong>" + escapeHtml(v.name) + "</strong>" +
        '<span class="status-badge status-' + status + '">' + escapeHtml(t("status_" + status)) + "</span>" +
      "</div>" +
      '<div class="list-meta">' + escapeHtml(v.from) + " → " + escapeHtml(v.to) + "</div>" +
      '<div class="list-meta">' + escapeHtml(v.reason) + "</div>" +
      '<div class="list-meta">' + v.time + "</div>" +
      actionsHtml;
    el.appendChild(div);
  });
}

function renderMissions(missions) {
  const el = document.getElementById("hr-missions");
  if (!missions || missions.length === 0) { el.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>"; return; }
  el.innerHTML = "";
  [...missions].reverse().forEach(m => {
    const status = m.status || "pending";
    let actionsHtml = "";
    if (status === "pending") {
      actionsHtml =
        '<div class="action-row">' +
          '<button class="btn-mini btn-approve" onclick="approveMission(\'' + m.id + '\')">✓ ' + escapeHtml(t("approve_btn")) + '</button>' +
          '<button class="btn-mini btn-decline" onclick="declineMission(\'' + m.id + '\')">✗ ' + escapeHtml(t("decline_btn")) + '</button>' +
        '</div>';
    }
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML =
      '<div class="list-row-top">' +
        "<strong>" + escapeHtml(m.name) + "</strong>" +
        '<span class="status-badge status-' + status + '">' + escapeHtml(t("status_" + status)) + "</span>" +
      "</div>" +
      '<div class="list-meta">📍 ' + escapeHtml(m.destination) + "</div>" +
      '<div class="list-meta">' + escapeHtml(m.from) + " → " + escapeHtml(m.to) + "</div>" +
      '<div class="list-meta">' + escapeHtml(m.reason) + "</div>" +
      '<div class="list-meta">' + m.time + "</div>" +
      actionsHtml;
    el.appendChild(div);
  });
}

function renderJustifications(list) {
  const el = document.getElementById("hr-justifications");
  if (!list || list.length === 0) { el.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>"; return; }
  el.innerHTML = "";
  [...list].reverse().forEach(j => {
    const div = document.createElement("div");
    div.className = "list-item";
    let attachmentHtml = "";
    if (j.file) {
      const safeFile = j.file.replace(/'/g, "&#039;");
      attachmentHtml =
        '<div class="just-attachment-row">' +
          '<img class="just-thumb" src="' + safeFile + '" alt="" onclick="openImageModal(this.src)" />' +
          '<button class="btn-mini btn-view" onclick="openImageModal(\'' + safeFile + '\')">🔍 ' + escapeHtml(t("view_attachment")) + '</button>' +
        '</div>';
    } else {
      attachmentHtml = '<div class="list-meta" style="font-style:italic">' + escapeHtml(t("no_attachment")) + "</div>";
    }
    div.innerHTML =
      "<strong>" + escapeHtml(j.name) + "</strong>" +
      '<div class="list-meta">' + escapeHtml(j.reason) + "</div>" +
      '<div class="list-meta">' + j.time + "</div>" +
      attachmentHtml;
    el.appendChild(div);
  });
}

function renderDirectory(employees) {
  const el = document.getElementById("hr-directory");
  if (!employees || employees.length === 0) { el.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>"; return; }
  el.innerHTML = "";
  employees.forEach(e => {
    const status = getEmployeeStatus(e.id);
    const age = calcAge(e.dob);
    const ageHtml = age !== null ? '<span class="dir-age">' + age + " " + escapeHtml(t("years_unit")) + "</span>" : "";
    const div = document.createElement("div");
    div.className = "list-item dir-item";
    div.innerHTML =
      '<div class="dir-info">' +
        "<strong>" + escapeHtml(e.name) + "</strong> " + ageHtml +
        '<div class="list-meta">' + escapeHtml(e.id) + "</div>" +
      "</div>" +
      '<span class="status-badge ' + statusClass(status) + '">' + escapeHtml(statusLabel(status)) + "</span>";
    el.appendChild(div);
  });
}

function renderRetirement(employees) {
  const el = document.getElementById("hr-retirement");
  const items = employees
    .filter(e => e.dob)
    .map(e => ({ ...e, age: calcAge(e.dob) }))
    .filter(e => e.age >= RETIREMENT_AGE - RETIREMENT_WARN_YEARS)
    .sort((a, b) => b.age - a.age);
  if (items.length === 0) { el.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>"; return; }
  el.innerHTML = "";
  items.forEach(e => {
    const yearsLeft = RETIREMENT_AGE - e.age;
    const noteText = yearsLeft <= 0 ? t("at_retirement_age") : t("retires_in", { n: yearsLeft });
    const div = document.createElement("div");
    div.className = "list-item retire-item" + (yearsLeft <= 0 ? " retire-now" : "");
    div.innerHTML =
      "<strong>" + escapeHtml(e.name) + "</strong>" +
      '<span class="dir-age">' + e.age + " " + escapeHtml(t("years_unit")) + "</span>" +
      '<div class="list-meta">' + escapeHtml(noteText) + "</div>";
    el.appendChild(div);
  });
}

function renderList(containerId, items, tplFn) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!items || items.length === 0) { el.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>"; return; }
  el.innerHTML = "";
  [...items].reverse().forEach(item => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = tplFn(item);
    el.appendChild(div);
  });
}

// =====================
// CLEAR ALL
// =====================
function clearAll() {
  showConfirm(t("confirm_clear_all"), () => {
    ["moods", "vacations", "complaints", "chats", "missions", "justifications"].forEach(k => localStorage.removeItem("wp_" + k));
    activeHrThread = null;
    refreshDashboard();
  });
}

// =====================
// CUSTOM CONFIRM
// =====================
let _confirmCallback = null;
function showConfirm(message, onAccept) {
  document.getElementById("confirm-message").textContent = message;
  _confirmCallback = onAccept;
  document.getElementById("confirm-modal").classList.remove("hidden");
}
function closeConfirm(event) {
  if (event && event.target !== document.getElementById("confirm-modal")) return;
  document.getElementById("confirm-modal").classList.add("hidden");
  _confirmCallback = null;
}
function acceptConfirm() {
  const cb = _confirmCallback;
  _confirmCallback = null;
  document.getElementById("confirm-modal").classList.add("hidden");
  if (typeof cb === "function") cb();
}

// =====================
// IMAGE VIEWER MODAL
// =====================
function openImageModal(src) {
  document.getElementById("image-modal-img").src = src;
  document.getElementById("image-modal").classList.remove("hidden");
}
function closeImageModal(event) {
  if (event && event.target !== document.getElementById("image-modal")) return;
  document.getElementById("image-modal").classList.add("hidden");
  document.getElementById("image-modal-img").src = "";
}

// =====================
// ACCOUNT MODAL
// =====================
function openAccountModal() {
  const account = findAccount(currentUser.id);
  document.getElementById("acct-name").value = account ? account.name : currentUser.name;
  document.getElementById("acct-dob").value = account && account.dob ? account.dob : "";
  document.getElementById("acct-cur-pass").value = "";
  document.getElementById("acct-new-pass").value = "";
  document.getElementById("acct-name-msg").textContent = "";
  document.getElementById("acct-dob-msg").textContent = "";
  document.getElementById("acct-pass-msg").textContent = "";

  if (currentUser.role === "hr") {
    document.getElementById("acct-hr-section").classList.remove("hidden");
    renderAccountUserList();
  } else {
    document.getElementById("acct-hr-section").classList.add("hidden");
  }

  document.getElementById("account-modal").classList.remove("hidden");
}

function closeAccountModal(event) {
  if (event && event.target !== document.getElementById("account-modal")) return;
  document.getElementById("account-modal").classList.add("hidden");
}

function saveAccountName() {
  const newName = document.getElementById("acct-name").value.trim();
  if (!newName) { showFeedback("acct-name-msg", t("err_name_empty"), "error"); return; }
  const accounts = getAccounts();
  const idx = accounts.findIndex(a => a.id === currentUser.id);
  if (idx === -1) return;
  accounts[idx].name = newName;
  saveAccounts(accounts);
  currentUser.name = newName;
  const initials = newName.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
  document.getElementById("user-avatar").textContent = initials;
  document.getElementById("user-name-display").textContent = newName;
  const sessionKey = localStorage.getItem("wp_session") ? "wp_session" : null;
  if (sessionKey) {
    const raw = localStorage.getItem(sessionKey);
    if (raw) { const s = JSON.parse(raw); s.name = newName; localStorage.setItem(sessionKey, JSON.stringify(s)); }
  }
  showFeedback("acct-name-msg", t("msg_name_updated"), "success");
}

function saveAccountDob() {
  const dob = document.getElementById("acct-dob").value;
  const accounts = getAccounts();
  const idx = accounts.findIndex(a => a.id === currentUser.id);
  if (idx === -1) return;
  accounts[idx].dob = dob || null;
  saveAccounts(accounts);
  showFeedback("acct-dob-msg", t("msg_dob_updated"), "success");
}

function saveAccountPassword() {
  const curPass = document.getElementById("acct-cur-pass").value;
  const newPass = document.getElementById("acct-new-pass").value;
  if (!curPass || !newPass) { showFeedback("acct-pass-msg", t("err_pass_fields"), "error"); return; }
  if (newPass.length < 6) { showFeedback("acct-pass-msg", t("err_pass_short"), "error"); return; }
  const accounts = getAccounts();
  const idx = accounts.findIndex(a => a.id === currentUser.id);
  if (idx === -1) return;
  if (accounts[idx].password !== curPass) { showFeedback("acct-pass-msg", t("err_cur_pass_wrong"), "error"); return; }
  accounts[idx].password = newPass;
  saveAccounts(accounts);
  document.getElementById("acct-cur-pass").value = "";
  document.getElementById("acct-new-pass").value = "";
  showFeedback("acct-pass-msg", t("msg_pass_changed"), "success");
}

function confirmDeleteAccount() {
  showConfirm(t("confirm_delete_my_account"), () => {
    let accounts = getAccounts();
    accounts = accounts.filter(a => a.id !== currentUser.id);
    saveAccounts(accounts);
    document.getElementById("account-modal").classList.add("hidden");
    handleLogout();
  });
}

function renderAccountUserList() {
  const container = document.getElementById("acct-user-list");
  const accounts = getAccounts().filter(a => a.role !== "hr");
  if (accounts.length === 0) {
    container.innerHTML = '<p class="empty-msg">' + escapeHtml(t("no_employee_accounts")) + "</p>";
    return;
  }
  container.innerHTML = "";
  accounts.forEach(acc => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    div.innerHTML =
      "<div>" +
        '<strong style="color:var(--primary)">' + escapeHtml(acc.name) + "</strong>" +
        '<div class="list-meta">' + escapeHtml(acc.id) + "</div>" +
      "</div>" +
      '<button class="btn-danger" style="width:auto;padding:8px 14px;font-size:12px;margin-top:0;min-height:38px" ' +
        "onclick=\"hrDeleteAccount('" + acc.id.replace(/'/g, "\\'") + "','" + acc.name.replace(/'/g, "\\'") + "')\">" + escapeHtml(t("delete_btn")) + "</button>";
    container.appendChild(div);
  });
}

function hrDeleteAccount(accountId, accountName) {
  showConfirm(t("confirm_delete_user", { name: accountName || accountId }), () => {
    let accounts = getAccounts();
    accounts = accounts.filter(a => a.id !== accountId);
    saveAccounts(accounts);
    renderAccountUserList();
    refreshDashboard();
  });
}

// =====================
// STORAGE
// =====================
function getAllMoods() { return getStorage("moods") || []; }
function getAllVacations() { return getStorage("vacations") || []; }
function getAllComplaints() { return getStorage("complaints") || []; }
function getAllChats() { return getStorage("chats") || []; }
function getAllMissions() { return getStorage("missions") || []; }
function getAllJustifications() { return getStorage("justifications") || []; }
function getStorage(key) { try { return JSON.parse(localStorage.getItem("wp_" + key)); } catch { return null; } }
function saveStorage(key, value) { localStorage.setItem("wp_" + key, JSON.stringify(value)); }

// =====================
// FEEDBACK / SECURITY
// =====================
function showFeedback(id, msg, type) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.className = "feedback-msg " + type;
  setTimeout(() => { el.textContent = ""; el.className = "feedback-msg"; }, 3500);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// =====================
// INIT
// =====================
(function init() {
  loadTheme();
  setLang("en");
  const session = loadSession();
  if (session) launchApp(session);
})();
