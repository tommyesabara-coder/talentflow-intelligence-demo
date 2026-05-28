const stages = [
  { id: "new", label: "New" },
  { id: "screening", label: "Screening" },
  { id: "interview", label: "Interview" },
  { id: "assessment", label: "Assessment" },
  { id: "offer", label: "Offer" },
  { id: "hired", label: "Hired" },
  { id: "rejected", label: "Rejected" },
];

const seedCandidates = [
  {
    id: "cand-001",
    name: "Nadia Putri",
    role: "People Analytics Specialist",
    source: "LinkedIn",
    age: 29,
    education: "S1 Psikologi Industri & Organisasi",
    companies: ["PT People Insight", "Nusantara Analytics"],
    experience: 4,
    skills: ["analytics", "sql", "dashboard", "stakeholder management"],
    score: 91,
    stage: "interview",
    stageJourney: ["new", "screening", "interview"],
    daysInStage: 2,
    history: [
      "CV masuk dari LinkedIn",
      "Auto-score 91/100 — kandidat diprioritaskan",
      "Reminder screening terkirim ke recruiter",
      "Interview panel dibuat otomatis",
    ],
  },
  {
    id: "cand-002",
    name: "Rafi Hidayat",
    role: "Talent Acquisition Partner",
    source: "Referral",
    age: 33,
    education: "S1 Manajemen SDM",
    companies: ["BrightHire Indonesia", "PT Talenta Prima"],
    experience: 6,
    skills: ["sourcing", "interview", "employer branding"],
    score: 88,
    stage: "offer",
    stageJourney: ["new", "screening", "interview", "offer"],
    daysInStage: 1,
    history: [
      "Referral diterima",
      "Auto-score 88/100 — lolos prioritas",
      "Feedback interviewer lengkap",
      "Offer checklist dibuat otomatis",
    ],
  },
  {
    id: "cand-003",
    name: "Salsa Maharani",
    role: "HR Operations Officer",
    source: "Job Portal",
    age: 27,
    education: "D3 Administrasi Bisnis",
    companies: ["PT Karya Payrollindo", "Mitra HR Services"],
    experience: 2,
    skills: ["hris", "payroll", "administration"],
    score: 76,
    stage: "screening",
    stageJourney: ["new", "screening"],
    daysInStage: 4,
    history: [
      "Lamaran masuk dari Job Portal",
      "Auto-score 76/100 — perlu review manual",
      "Task screening dibuat dengan SLA 48 jam",
    ],
  },
  {
    id: "cand-004",
    name: "Dimas Ardi",
    role: "People Analytics Specialist",
    source: "Career Site",
    age: 28,
    education: "S1 Statistika",
    companies: ["Retail Nusantara", "People Data Lab"],
    experience: 3,
    skills: ["excel", "power bi", "people data"],
    score: 82,
    stage: "new",
    stageJourney: ["new"],
    daysInStage: 1,
    history: [
      "CV masuk dari Career Site",
      "Auto-score 82/100 — masuk antrean recruiter",
    ],
  },
  {
    id: "cand-005",
    name: "Alya Rahman",
    role: "Talent Acquisition Partner",
    source: "LinkedIn",
    age: 31,
    education: "S1 Komunikasi",
    companies: ["TalentHub Asia", "PT Rekrutmen Digital"],
    experience: 5,
    skills: ["sourcing", "ats", "candidate experience"],
    score: 94,
    stage: "hired",
    stageJourney: ["new", "screening", "interview", "offer", "hired"],
    daysInStage: 0,
    history: [
      "Interview selesai",
      "Offer diterima",
      "Handover onboarding terkirim otomatis",
    ],
  },
  {
    id: "cand-006",
    name: "Bimo Saputra",
    role: "HR Operations Officer",
    source: "Job Portal",
    age: 24,
    education: "S1 Administrasi Publik",
    companies: ["PT Admin Solusi"],
    experience: 1,
    skills: ["administration", "excel"],
    score: 61,
    stage: "rejected",
    stageJourney: ["new", "rejected"],
    daysInStage: 0,
    history: [
      "Auto-score 61/100",
      "Reject email terkirim setelah review recruiter",
    ],
  },
];

const seedJobs = [
  {
    id: "job-001",
    title: "People Analytics Specialist",
    department: "Human Capital",
    location: "Jakarta",
    workMode: "Hybrid",
    employmentType: "Full-time",
    publicAd: {
      summary:
        "Mengubah data people menjadi insight yang membantu manajemen mengambil keputusan talent, retention, dan workforce planning.",
      responsibilities: [
        "Membangun dashboard people analytics",
        "Menganalisis headcount, turnover, hiring funnel, dan engagement",
        "Bekerja sama dengan HRBP dan leadership untuk membaca tren organisasi",
      ],
      requirements: [
        "Pengalaman minimal 3 tahun di analytics atau HR analytics",
        "Menguasai SQL, spreadsheet, dan data visualization",
        "Mampu menjelaskan insight data ke stakeholder non-teknis",
      ],
      benefits: ["Hybrid work", "Exposure ke strategic HC project", "Learning budget"],
    },
    scoring: {
      minExperience: 3,
      mustHaveSkills: ["analytics", "sql", "dashboard"],
      niceHaveSkills: ["power bi", "people data", "stakeholder management"],
      keywords: ["turnover", "workforce planning", "engagement", "people analytics"],
      disqualifiers: ["tidak menguasai excel", "no analytics"],
      autoScreenThreshold: 85,
      internalNotes: "Prioritaskan kandidat yang pernah membuat dashboard HC end-to-end.",
    },
  },
  {
    id: "job-002",
    title: "Talent Acquisition Partner",
    department: "Human Capital",
    location: "Jakarta",
    workMode: "Hybrid",
    employmentType: "Full-time",
    publicAd: {
      summary:
        "Mengelola end-to-end hiring process dan menjaga pengalaman kandidat tetap cepat, rapi, dan manusiawi.",
      responsibilities: [
        "Menjalankan sourcing dan screening kandidat",
        "Mengelola interview panel dan feedback kandidat",
        "Meningkatkan candidate experience dan employer branding",
      ],
      requirements: [
        "Pengalaman minimal 4 tahun di talent acquisition",
        "Kuat dalam sourcing, interview, dan stakeholder management",
        "Terbiasa menggunakan ATS atau recruitment tracker",
      ],
      benefits: ["Hiring project lintas fungsi", "Performance bonus", "Flexible work arrangement"],
    },
    scoring: {
      minExperience: 4,
      mustHaveSkills: ["sourcing", "interview", "candidate experience"],
      niceHaveSkills: ["ats", "employer branding", "stakeholder management"],
      keywords: ["linkedin recruiter", "boolean search", "hiring manager", "talent pipeline"],
      disqualifiers: ["tidak bersedia target hiring", "no sourcing"],
      autoScreenThreshold: 84,
      internalNotes: "Nilai lebih untuk kandidat yang kuat di niche hiring dan stakeholder advisory.",
    },
  },
  {
    id: "job-003",
    title: "HR Operations Officer",
    department: "Human Capital",
    location: "Surabaya",
    workMode: "On-site",
    employmentType: "Full-time",
    publicAd: {
      summary:
        "Menjaga operasional HR harian tetap akurat, tertib, dan responsif untuk seluruh karyawan.",
      responsibilities: [
        "Mengelola administrasi karyawan, HRIS, dan dokumen HR",
        "Mendukung proses payroll preparation dan benefit administration",
        "Menjawab employee request sesuai SLA",
      ],
      requirements: [
        "Pengalaman minimal 2 tahun di HR operations",
        "Teliti dalam administrasi dan pengolahan data",
        "Menguasai Excel dan terbiasa dengan HRIS",
      ],
      benefits: ["Structured onboarding", "Clear career path", "Operational excellence training"],
    },
    scoring: {
      minExperience: 2,
      mustHaveSkills: ["hris", "payroll", "administration"],
      niceHaveSkills: ["excel", "employee service", "document control"],
      keywords: ["bpjs", "attendance", "employee data", "hr operations"],
      disqualifiers: ["tidak teliti", "no payroll"],
      autoScreenThreshold: 82,
      internalNotes: "Prioritaskan kandidat yang rapi di data, payroll support, dan employee service.",
    },
  },
];

const storageKey = "recruitflow-demo";
const stageOrder = stages.map((stage) => stage.id);
const visualPipelineStages = [
  { id: "new", label: "Applied" },
  { id: "interview", label: "Interview" },
  { id: "assessment", label: "Assessment" },
  { id: "offer", label: "Offer" },
  { id: "hired", label: "Hired" },
];
const stageLabelOverrides = {
  new: "Applied",
  screening: "Screening",
  interview: "Interview",
  assessment: "Assessment",
  offer: "Offer",
  hired: "Hired",
  rejected: "Rejected",
};
const seedBlueprints = seedJobs.map((job, index) => createBlueprintFromJob(job, index));
const supportedDriveMimeTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const demoCandidateProfiles = Object.fromEntries(
  seedCandidates.map((candidate) => [
    candidate.name,
    {
      age: candidate.age,
      education: candidate.education,
      companies: candidate.companies,
    },
  ]),
);

let state = loadState();
let selectedCandidateIds = new Set();
let activeBlueprintDraft = null;
let driveAccessToken = null;
let driveTokenClient = null;
let pickerApiReady = false;
let pendingImportTargetRole = "";
let candidateFitFilter = "all";
let pendingStageSchedule = null;
let importQueueRunning = false;
let activeKpiFilter = "all";
let scoringCandidateIds = new Set();

const elements = {
  pipelineBoard: document.querySelector("#pipelineBoard"),
  activityFeed: document.querySelector("#activityFeed"),
  taskQueue: document.querySelector("#taskQueue"),
  activeCandidatesMetric: document.querySelector("#activeCandidatesMetric"),
  interviewsMetric: document.querySelector("#interviewsMetric"),
  slaMetric: document.querySelector("#slaMetric"),
  conversionMetric: document.querySelector("#conversionMetric"),
  kpiFilterCards: document.querySelectorAll(".kpi-filter-card"),
  activeCandidatesDetail: document.querySelector("#activeCandidatesDetail"),
  interviewsDetail: document.querySelector("#interviewsDetail"),
  slaDetail: document.querySelector("#slaDetail"),
  conversionDetail: document.querySelector("#conversionDetail"),
  focusPills: document.querySelectorAll(".focus-pill"),
  simulateCandidateBtn: document.querySelector("#simulateCandidateBtn"),
  openJobBuilderBtn: document.querySelector("#openJobBuilderBtn"),
  openJobBuilderPanelBtn: document.querySelector("#openJobBuilderPanelBtn"),
  openImportBtn: document.querySelector("#openImportBtn"),
  dailyAutomationBtn: document.querySelector("#dailyAutomationBtn"),
  resetDemoBtn: document.querySelector("#resetDemoBtn"),
  searchInput: document.querySelector("#searchInput"),
  stageFilter: document.querySelector("#stageFilter"),
  roleFilter: document.querySelector("#roleFilter"),
  candidateRoleSelect: document.querySelector("#candidateRoleSelect"),
  importTargetRoleSelect: document.querySelector("#importTargetRoleSelect"),
  jobsList: document.querySelector("#jobsList"),
  jobDialog: document.querySelector("#jobDialog"),
  jobForm: document.querySelector("#jobForm"),
  closeJobDialogBtn: document.querySelector("#closeJobDialogBtn"),
  cancelJobDialogBtn: document.querySelector("#cancelJobDialogBtn"),
  candidateDialog: document.querySelector("#candidateDialog"),
  candidateForm: document.querySelector("#candidateForm"),
  closeDialogBtn: document.querySelector("#closeDialogBtn"),
  cancelDialogBtn: document.querySelector("#cancelDialogBtn"),
  detailDialog: document.querySelector("#detailDialog"),
  closeDetailBtn: document.querySelector("#closeDetailBtn"),
  reanalyzeCandidateBtn: document.querySelector("#reanalyzeCandidateBtn"),
  detailName: document.querySelector("#detailName"),
  detailSummary: document.querySelector("#detailSummary"),
  detailTrail: document.querySelector("#detailTrail"),
  candidateCardTemplate: document.querySelector("#candidateCardTemplate"),
  importDialog: document.querySelector("#importDialog"),
  importForm: document.querySelector("#importForm"),
  closeImportBtn: document.querySelector("#closeImportBtn"),
  cancelImportBtn: document.querySelector("#cancelImportBtn"),
  importSuccessDialog: document.querySelector("#importSuccessDialog"),
  confirmImportSuccessBtn: document.querySelector("#confirmImportSuccessBtn"),
  importSuccessTitle: document.querySelector("#importSuccessTitle"),
  importSuccessCopy: document.querySelector("#importSuccessCopy"),
  folderInput: document.querySelector("#folderInput"),
  fileInput: document.querySelector("#fileInput"),
  selectedFilesBox: document.querySelector("#selectedFilesBox"),
  aiParserStatus: document.querySelector("#aiParserStatus"),
  importStatus: document.querySelector("#importStatus"),
  submitImportBtn: document.querySelector("#submitImportBtn"),
  driveDialog: document.querySelector("#driveDialog"),
  closeDriveBtn: document.querySelector("#closeDriveBtn"),
  connectDriveBtn: document.querySelector("#connectDriveBtn"),
  pickDriveFolderBtn: document.querySelector("#pickDriveFolderBtn"),
  driveConnectionCopy: document.querySelector("#driveConnectionCopy"),
  globalSearchInput: document.querySelector("#globalSearchInput"),
  topApiKeyBtn: document.querySelector("#topApiKeyBtn"),
  topOpenImportBtn: document.querySelector("#topOpenImportBtn"),
  topAddCandidateBtn: document.querySelector("#topAddCandidateBtn"),
  apiKeyDialog: document.querySelector("#apiKeyDialog"),
  apiKeyForm: document.querySelector("#apiKeyForm"),
  closeApiKeyBtn: document.querySelector("#closeApiKeyBtn"),
  cancelApiKeyBtn: document.querySelector("#cancelApiKeyBtn"),
  apiKeyStatus: document.querySelector("#apiKeyStatus"),
  topActiveCandidatesPill: document.querySelector("#topActiveCandidatesPill"),
  sidebarJobsCount: document.querySelector("#sidebarJobsCount"),
  sidebarPipelineCount: document.querySelector("#sidebarPipelineCount"),
  sidebarNavLinks: document.querySelectorAll(".sidebar-link"),
  commercialActiveMetric: document.querySelector("#commercialActiveMetric"),
  commercialJobMetric: document.querySelector("#commercialJobMetric"),
  commercialSlaMetric: document.querySelector("#commercialSlaMetric"),
  blueprintForm: document.querySelector("#blueprintForm"),
  blueprintBuilderPanel: document.querySelector("#blueprint"),
  closeBlueprintBuilderBtn: document.querySelector("#closeBlueprintBuilderBtn"),
  analyzeBlueprintBtn: document.querySelector("#analyzeBlueprintBtn"),
  clearBlueprintBtn: document.querySelector("#clearBlueprintBtn"),
  blueprintPreview: document.querySelector("#blueprintPreview"),
  blueprintDetailDialog: document.querySelector("#blueprintDetailDialog"),
  closeBlueprintDetailBtn: document.querySelector("#closeBlueprintDetailBtn"),
  blueprintDetailTitle: document.querySelector("#blueprintDetailTitle"),
  blueprintDetailContent: document.querySelector("#blueprintDetailContent"),
  storedCvDialog: document.querySelector("#storedCvDialog"),
  closeStoredCvBtn: document.querySelector("#closeStoredCvBtn"),
  storedCvTitle: document.querySelector("#storedCvTitle"),
  storedCvContent: document.querySelector("#storedCvContent"),
  interviewBriefDialog: document.querySelector("#interviewBriefDialog"),
  interviewBriefContent: document.querySelector("#interviewBriefContent"),
  interviewResultDialog: document.querySelector("#interviewResultDialog"),
  closeInterviewResultBtn: document.querySelector("#closeInterviewResultBtn"),
  interviewResultTitle: document.querySelector("#interviewResultTitle"),
  interviewResultContent: document.querySelector("#interviewResultContent"),
  stageDateDialog: document.querySelector("#stageDateDialog"),
  stageDateForm: document.querySelector("#stageDateForm"),
  closeStageDateBtn: document.querySelector("#closeStageDateBtn"),
  cancelStageDateBtn: document.querySelector("#cancelStageDateBtn"),
  stageDateTitle: document.querySelector("#stageDateTitle"),
  stageDateCopy: document.querySelector("#stageDateCopy"),
  stageDateInput: document.querySelector("#stageDateInput"),
};

ensureDialogSupport();
initialize();

function ensureDialogSupport() {
  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.removeAttribute("open");
    if (typeof dialog.showModal !== "function") {
      dialog.showModal = function showModalFallback() {
        this.setAttribute("open", "");
      };
    }
    if (typeof dialog.close !== "function") {
      dialog.close = function closeFallback() {
        this.removeAttribute("open");
      };
    }
  });
}

function initialize() {
  hydrateStageFilter();
  hydrateRoleFilter();
  bindEvents();
  hydrateAiParserStatus();
  initializeDriveIntegration();
  render();
}

function hydrateStageFilter() {
  elements.stageFilter.innerHTML = '<option value="all">Semua stage</option>';
  stages.forEach((stage) => {
    const option = document.createElement("option");
    option.value = stage.id;
    option.textContent = stage.label;
    elements.stageFilter.append(option);
  });
}

function initializeDriveIntegration() {
  const config = getDriveConfig();

  if (!hasDriveConfig(config)) {
    elements.driveConnectionCopy.textContent =
      "Tambahkan Google OAuth Client ID, API key, dan App ID untuk mengaktifkan direct cloud import.";
    elements.connectDriveBtn.textContent = "Lihat kebutuhan setup";
    return;
  }

  elements.driveConnectionCopy.textContent = "Menyiapkan koneksi Google Drive...";

  waitForGoogleLibraries()
    .then(() => {
      driveTokenClient = google.accounts.oauth2.initTokenClient({
        client_id: config.clientId,
        scope: config.scope,
        callback: () => {},
        error_callback: (error) => {
          elements.importStatus.textContent =
            error.type === "popup_failed_to_open"
              ? "Browser ini memblokir popup Google. Buka demo di Chrome/Edge biasa lalu klik Hubungkan Drive."
              : `Koneksi Google Drive gagal dibuka: ${error.type ?? "popup tidak tersedia"}.`;
        },
      });

      gapi.load("picker", {
        callback: () => {
          pickerApiReady = true;
          elements.driveConnectionCopy.textContent =
            "Siap dihubungkan ke Google Drive.";
        },
      });
    })
    .catch(() => {
      elements.driveConnectionCopy.textContent =
        "Library Google gagal dimuat. Periksa koneksi internet lalu refresh halaman.";
    });
}

function getDriveConfig() {
  return window.RECRUITFLOW_DRIVE_CONFIG ?? {};
}

function hasDriveConfig(config) {
  return Boolean(config.clientId && config.apiKey && config.appId && config.scope);
}

function waitForGoogleLibraries(timeoutMs = 10000) {
  return new Promise((resolve, reject) => {
    const started = Date.now();
    const timer = setInterval(() => {
      if (window.google?.accounts?.oauth2 && window.gapi) {
        clearInterval(timer);
        resolve();
      } else if (Date.now() - started > timeoutMs) {
        clearInterval(timer);
        reject(new Error("Google libraries not ready"));
      }
    }, 100);
  });
}

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    const parsedState = JSON.parse(saved);
    return {
      candidates: (parsedState.candidates ?? structuredClone(seedCandidates)).map(normalizeCandidateProfile),
      jobs: parsedState.jobs ?? structuredClone(seedJobs),
      blueprints: (parsedState.blueprints ?? (parsedState.jobs ?? seedJobs).map(createBlueprintFromJob)).map(normalizeBlueprint),
      activities: parsedState.activities ?? [
        activity("Automation engine aktif — semua kandidat baru akan di-score otomatis."),
      ],
    };
  }

  return {
    candidates: structuredClone(seedCandidates).map(normalizeCandidateProfile),
    jobs: structuredClone(seedJobs),
    blueprints: structuredClone(seedBlueprints).map(normalizeBlueprint),
    activities: [
      activity("Automation engine aktif — semua kandidat baru akan di-score otomatis."),
      activity("Daily SLA scan siap dijalankan untuk interviewer dan recruiter."),
      activity("Pipeline demo dimuat dengan 6 kandidat contoh."),
    ],
  };
}

function normalizeCandidateProfile(candidate) {
  const profile = demoCandidateProfiles[candidate.name] ?? {};
  return {
    ...candidate,
    age: candidate.age ?? profile.age ?? "",
    education: candidate.education ?? profile.education ?? "",
    companies: normalizeCompanies(candidate.companies ?? profile.companies),
    jobTitles: normalizeCompanies(candidate.jobTitles),
    rawExperience: candidate.rawExperience ?? "",
    parserMode: candidate.parserMode ?? "",
    parseConfidence: Number(candidate.parseConfidence ?? 0),
    fieldConfidence: candidate.fieldConfidence ?? {},
    parseEvidence: normalizeParseEvidence(candidate.parseEvidence),
    parseWarnings: normalizeLines(candidate.parseWarnings),
    cacheHit: Boolean(candidate.cacheHit),
    aiFitScore: candidate.aiFitScore ?? null,
    interviewResult: candidate.interviewResult ?? null,
    stageJourney: normalizeStageJourney(candidate.stageJourney, candidate.stage),
    stageDates: normalizeStageDates(candidate.stageDates),
    nextStep: candidate.nextStep ?? "",
  };
}

function normalizeStageDates(stageDates = {}) {
  if (!stageDates || typeof stageDates !== "object") return {};
  return Object.fromEntries(
    Object.entries(stageDates)
      .filter(([stage]) => stageOrder.includes(stage))
      .map(([stage, dates]) => [
        stage,
        [...new Set((Array.isArray(dates) ? dates : [dates]).filter(Boolean).map((date) => String(date).slice(0, 10)))],
      ]),
  );
}

function normalizeStageJourney(stageJourney, currentStage = "new") {
  const defaultJourney = inferLegacyStageJourney(currentStage);
  const journey = Array.isArray(stageJourney) ? stageJourney : defaultJourney;
  const normalized = [...new Set(journey.filter((stage) => stageOrder.includes(stage)))];
  if (!normalized.length) normalized.push("new");
  if (currentStage && stageOrder.includes(currentStage) && !normalized.includes(currentStage)) {
    normalized.push(currentStage);
  }
  return normalized;
}

function inferLegacyStageJourney(currentStage = "new") {
  if (currentStage === "rejected") return ["new", "rejected"];
  const visualIds = visualPipelineStages.map((stage) => stage.id);
  const currentIndex = visualIds.indexOf(currentStage);
  if (currentIndex <= 0) return ["new"];
  return visualIds.slice(0, currentIndex + 1);
}

function normalizeCompanies(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === "string") {
    return value
      .split(/,|\n|;/)
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
}

function normalizeParseEvidence(value) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => ({
      field: item?.field ?? "field",
      value: item?.value ?? "",
      source: item?.source ?? "",
      confidence: Number(item?.confidence ?? 0),
    }))
    .filter((item) => item.value || item.source);
}

function createBlueprintFromJob(job, index = 0) {
  const level = inferLevelFromJob(job);
  const minExperience = job.scoring?.minExperience ?? 3;
  return {
    id: `blueprint-seed-${index + 1}`,
    status: index < 3 ? "on" : "off",
    positionName: job.title,
    companyName: "Demo Company",
    businessType: job.location === "Surabaya" ? "Operations & services" : "Human capital services",
    roleHolder: job.publicAd?.summary ?? `Memegang jabatan ${job.title}`,
    positionLevel: level,
    preferences: job.scoring?.internalNotes ?? "",
    kpiOrientation: recommendKpiOrientation(level, job.title, job.publicAd?.summary),
    softSkills: inferSoftSkills(job.title, job.publicAd?.summary, level),
    hardSkills: [...new Set([...(job.scoring?.mustHaveSkills ?? []), ...(job.scoring?.niceHaveSkills ?? [])])],
    administrativeRequirements: [
      `Pengalaman minimal ${minExperience} tahun pada fungsi terkait`,
      `Pernah menangani ruang lingkup ${job.department}`,
      `Diutamakan familiar dengan industri ${job.location === "Surabaya" ? "operasional" : "korporasi"}`,
    ],
    discProfile: recommendDiscProfile(job.title, level, job.publicAd?.summary),
    scoring: {
      minExperience,
      mustHaveSkills: job.scoring?.mustHaveSkills ?? [],
      niceHaveSkills: job.scoring?.niceHaveSkills ?? [],
      keywords: job.scoring?.keywords ?? [],
      disqualifiers: job.scoring?.disqualifiers ?? [],
      autoScreenThreshold: job.scoring?.autoScreenThreshold ?? 85,
    },
    createdAt: new Date().toISOString(),
  };
}

function normalizeBlueprint(blueprint) {
  const mainResponsibilities = normalizeLines(blueprint.mainResponsibilities ?? blueprint.jobDesc ?? blueprint.kpiOrientation);
  const roleChallenges = normalizeLines(blueprint.roleChallenges ?? blueprint.challenges);
  const jobRequirements = normalizeLines([
    ...normalizeLines(blueprint.jobRequirements),
    ...normalizeLines(blueprint.administrativeRequirements),
    ...normalizeLines(blueprint.hardSkills).slice(0, 4),
    ...normalizeLines(blueprint.softSkills).slice(0, 3),
  ]);
  return {
    id: blueprint.id ?? `blueprint-${Date.now()}`,
    status: blueprint.status ?? "off",
    positionName: blueprint.positionName ?? blueprint.title ?? "",
    companyName: blueprint.companyName ?? "",
    businessType: blueprint.businessType ?? "",
    roleHolder: blueprint.roleHolder ?? blueprint.summary ?? "",
    positionLevel: blueprint.positionLevel ?? "manager",
    minimumEducation: blueprint.minimumEducation ?? extractEducationRequirement(jobRequirements.join("\n")),
    fieldOfStudy: blueprint.fieldOfStudy ?? "",
    minimumExperience: Number(blueprint.minimumExperience ?? blueprint.scoring?.minExperience ?? extractExperienceRequirement(jobRequirements.join("\n"))),
    preferences: blueprint.preferences ?? "",
    mainResponsibilities,
    roleChallenges: roleChallenges.length ? roleChallenges : inferRoleChallenges(blueprint.positionName ?? "", blueprint.businessType ?? "", blueprint.positionLevel ?? "manager"),
    jobRequirements: jobRequirements.length ? dedupe(jobRequirements) : inferJobRequirements(blueprint.positionName ?? "", blueprint.businessType ?? "", blueprint.positionLevel ?? "manager"),
    kpiOrientation: normalizeLines(blueprint.kpiOrientation),
    softSkills: normalizeLines(blueprint.softSkills),
    hardSkills: normalizeLines(blueprint.hardSkills),
    administrativeRequirements: normalizeLines(blueprint.administrativeRequirements),
    discProfile: blueprint.discProfile ?? recommendDiscProfile(blueprint.positionName ?? "", blueprint.positionLevel ?? "manager", blueprint.roleHolder ?? ""),
    scoring: {
      minExperience: Number(blueprint.scoring?.minExperience ?? minExperienceForLevel(blueprint.positionLevel ?? "manager")),
      mustHaveSkills: normalizeTerms(blueprint.scoring?.mustHaveSkills ?? blueprint.hardSkills),
      niceHaveSkills: normalizeTerms(blueprint.scoring?.niceHaveSkills ?? blueprint.softSkills),
      keywords: normalizeTerms(blueprint.scoring?.keywords ?? blueprint.kpiOrientation),
      disqualifiers: normalizeTerms(blueprint.scoring?.disqualifiers),
      autoScreenThreshold: Number(blueprint.scoring?.autoScreenThreshold ?? 85),
    },
    createdAt: blueprint.createdAt ?? new Date().toISOString(),
  };
}

function normalizeLines(value) {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  return parseLines(value);
}

function dedupe(items = []) {
  const seen = new Set();
  return items.filter((item) => {
    const key = String(item).trim().toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function normalizeTerms(value) {
  if (Array.isArray(value)) return value.map((item) => String(item).trim().toLowerCase()).filter(Boolean);
  return parseTerms(value);
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function hydrateRoleFilter() {
  const selectedFilter = elements.roleFilter.value || "all";
  const selectedCandidateRole = elements.candidateRoleSelect.value;
  const selectedImportRole = elements.importTargetRoleSelect.value;
  const roles = getAvailableRoles();

  elements.roleFilter.innerHTML = '<option value="all">Semua role</option>';
  elements.candidateRoleSelect.innerHTML = "";
  elements.importTargetRoleSelect.innerHTML = "";

  roles.forEach((role) => {
    elements.roleFilter.append(createOption(role));
    elements.candidateRoleSelect.append(createOption(role));
    elements.importTargetRoleSelect.append(createOption(role));
  });

  elements.roleFilter.value = roles.includes(selectedFilter) || selectedFilter === "all" ? selectedFilter : "all";
  elements.candidateRoleSelect.value = roles.includes(selectedCandidateRole) ? selectedCandidateRole : roles[0];
  elements.importTargetRoleSelect.value = roles.includes(selectedImportRole) ? selectedImportRole : roles[0];
}

function createOption(role) {
  const option = document.createElement("option");
  option.value = role;
  option.textContent = role;
  return option;
}

function getAvailableRoles() {
  return [
    ...new Set([
      ...state.jobs.map((job) => job.title),
      ...state.blueprints.filter((blueprint) => blueprint.status !== "archive").map((blueprint) => blueprint.positionName),
      ...state.candidates.map((candidate) => candidate.role),
    ]),
  ];
}

function bindEvents() {
  elements.openJobBuilderBtn.addEventListener("click", openJobDialog);
  elements.openJobBuilderPanelBtn.addEventListener("click", openJobDialog);
  elements.simulateCandidateBtn.addEventListener("click", () => elements.candidateDialog.showModal());
  elements.topAddCandidateBtn.addEventListener("click", () => elements.candidateDialog.showModal());
  elements.openImportBtn.addEventListener("click", () => elements.importDialog.showModal());
  elements.topOpenImportBtn.addEventListener("click", () => elements.importDialog.showModal());
  elements.topApiKeyBtn?.addEventListener("click", openApiKeyDialog);
  elements.closeApiKeyBtn?.addEventListener("click", () => closeDialogElement(elements.apiKeyDialog));
  elements.cancelApiKeyBtn?.addEventListener("click", () => closeDialogElement(elements.apiKeyDialog));
  elements.apiKeyForm?.addEventListener("submit", saveRuntimeApiKey);
  elements.closeJobDialogBtn.addEventListener("click", () => elements.jobDialog.close());
  elements.cancelJobDialogBtn.addEventListener("click", () => elements.jobDialog.close());
  elements.closeDialogBtn.addEventListener("click", () => elements.candidateDialog.close());
  elements.cancelDialogBtn.addEventListener("click", () => elements.candidateDialog.close());
  elements.closeImportBtn.addEventListener("click", () => closeDialogElement(elements.importDialog));
  elements.cancelImportBtn.addEventListener("click", () => closeDialogElement(elements.importDialog));
  elements.confirmImportSuccessBtn?.addEventListener("click", finalizeImportSuccess);
  elements.closeDetailBtn.addEventListener("click", () => elements.detailDialog.close());
  elements.reanalyzeCandidateBtn?.addEventListener("click", reanalyzeActiveCandidate);
  elements.closeBlueprintDetailBtn.addEventListener("click", () => elements.blueprintDetailDialog.close());
  elements.closeStoredCvBtn?.addEventListener("click", () => elements.storedCvDialog.close());
  elements.closeInterviewResultBtn?.addEventListener("click", () => closeDialogElement(elements.interviewResultDialog));
  elements.closeStageDateBtn?.addEventListener("click", closeStageDateDialog);
  elements.cancelStageDateBtn?.addEventListener("click", closeStageDateDialog);
  elements.stageDateForm?.addEventListener("submit", confirmStageDateSchedule);
  elements.closeBlueprintBuilderBtn.addEventListener("click", hideBlueprintBuilder);
  elements.closeDriveBtn.addEventListener("click", () => elements.driveDialog.close());
  elements.connectDriveBtn.addEventListener("click", connectGoogleDrive);
  elements.pickDriveFolderBtn.addEventListener("click", openDriveFolderPicker);

  elements.candidateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(elements.candidateForm);
    addCandidate({
      name: formData.get("name").trim(),
      role: formData.get("role"),
      source: formData.get("source"),
      experience: Number(formData.get("experience")),
      skills: formData
        .get("skills")
        .split(",")
        .map((skill) => skill.trim().toLowerCase())
        .filter(Boolean),
    });
    elements.candidateForm.reset();
    elements.candidateDialog.close();
  });

  elements.dailyAutomationBtn.addEventListener("click", runDailyAutomation);
  elements.resetDemoBtn.addEventListener("click", resetDemo);
  elements.searchInput.addEventListener("input", () => {
    candidateFitFilter = "all";
    elements.globalSearchInput.value = elements.searchInput.value;
    renderPipeline();
  });
  elements.globalSearchInput.addEventListener("input", () => {
    candidateFitFilter = "all";
    elements.searchInput.value = elements.globalSearchInput.value;
    renderPipeline();
  });
  elements.stageFilter.addEventListener("change", renderPipeline);
  elements.roleFilter.addEventListener("change", () => {
    candidateFitFilter = "all";
    activeKpiFilter = "all";
    renderPipeline();
  });
  elements.kpiFilterCards?.forEach((card) => {
    card.addEventListener("click", () => activateKpiFilter(card.dataset.kpiFilter || "all"));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activateKpiFilter(card.dataset.kpiFilter || "all");
      }
    });
  });
  elements.folderInput.addEventListener("change", handleSelectedCvFiles);
  elements.fileInput.addEventListener("change", handleSelectedCvFiles);
  elements.importForm.addEventListener("submit", importCvFiles);
  elements.jobForm.addEventListener("submit", saveJobPosting);
  elements.analyzeBlueprintBtn.addEventListener("click", saveJobdescInput);
  elements.clearBlueprintBtn.addEventListener("click", resetBlueprintBuilder);
  bindFloatingMenuDismissal();
  bindStageFilterOutsideReset();
  elements.sidebarNavLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      elements.sidebarNavLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
      if (link.getAttribute("href") === "#blueprint") {
        event.preventDefault();
        showBlueprintBuilder();
      }
    });
  });
}

function bindStageFilterOutsideReset() {
  document.addEventListener("click", (event) => {
    if (!elements.stageFilter || (elements.stageFilter.value === "all" && activeKpiFilter === "all")) return;
    const eventElement = event.target?.nodeType === Node.TEXT_NODE ? event.target.parentElement : event.target;
    if (eventElement?.closest?.(".stage-summary-strip, #stageFilter, .kpi-filter-card, dialog")) return;
    elements.stageFilter.value = "all";
    activeKpiFilter = "all";
    renderPipeline();
  });
}

function activateKpiFilter(filter) {
  activeKpiFilter = activeKpiFilter === filter ? "all" : filter;
  if (activeKpiFilter !== "all") {
    elements.stageFilter.value = "all";
    candidateFitFilter = "all";
    const pipelinePanel = document.querySelector("#pipeline");
    pipelinePanel?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.location.hash !== "#pipeline") {
      history.replaceState(null, "", "#pipeline");
    }
  }
  renderPipeline();
}

function bindFloatingMenuDismissal() {
  const menuSelector = ".blueprint-action-menu, .candidate-step-menu, .candidate-secondary-menu";
  const summarySelector =
    ".blueprint-action-menu > summary, .candidate-step-menu > summary, .candidate-secondary-menu > summary";

  document.addEventListener("click", (event) => {
    const eventElement = event.target?.nodeType === Node.TEXT_NODE ? event.target.parentElement : event.target;
    const summary = eventElement?.closest?.(summarySelector);
    if (!summary) return;
    event.preventDefault();
    const menu = summary.parentElement;
    const shouldOpen = !menu.open;
    closeFloatingMenus(shouldOpen ? menu : null);
    menu.open = shouldOpen;
    if (shouldOpen) {
      requestAnimationFrame(() => fitFloatingMenuToViewport(menu));
    } else {
      menu.classList.remove("menu-open-up");
    }
  });

  document.addEventListener("click", (event) => {
    const eventElement = event.target?.nodeType === Node.TEXT_NODE ? event.target.parentElement : event.target;
    const clickedMenu = eventElement?.closest?.(menuSelector) ?? null;
    closeFloatingMenus(clickedMenu);
  });

  document.addEventListener("toggle", (event) => {
    const menu = event.target;
    if (!menu.matches?.(menuSelector)) return;
    if (!menu.open) {
      menu.classList.remove("menu-open-up");
      return;
    }
    closeFloatingMenus(menu);
    requestAnimationFrame(() => fitFloatingMenuToViewport(menu));
  }, true);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeFloatingMenus();
  });

  window.addEventListener("resize", () => {
    document
      .querySelectorAll(".blueprint-action-menu[open], .candidate-step-menu[open], .candidate-secondary-menu[open]")
      .forEach(fitFloatingMenuToViewport);
  });
  window.addEventListener("scroll", () => {
    document
      .querySelectorAll(".blueprint-action-menu[open], .candidate-step-menu[open], .candidate-secondary-menu[open]")
      .forEach(fitFloatingMenuToViewport);
  }, true);
}

function closeFloatingMenus(exceptMenu = null) {
  document
    .querySelectorAll(".blueprint-action-menu[open], .candidate-step-menu[open], .candidate-secondary-menu[open]")
    .forEach((menu) => {
      if (menu !== exceptMenu) {
        menu.removeAttribute("open");
        menu.classList.remove("menu-open-up");
      }
    });
}

function fitFloatingMenuToViewport(menu) {
  const panel = menu.querySelector(".blueprint-menu-panel, .step-menu-panel, .secondary-menu-panel");
  if (!panel) return;
  menu.classList.remove("menu-open-up");
  panel.style.maxHeight = "";
  const margin = 14;
  const panelRect = panel.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();
  const visualContainer = menu.closest(".jobs-panel, .pipeline-panel, .candidate-list, .panel");
  const containerRect = visualContainer?.getBoundingClientRect?.();
  const lowerLimit = Math.min(
    window.innerHeight - margin,
    containerRect ? containerRect.bottom - margin : window.innerHeight - margin,
  );
  const upperLimit = Math.max(
    margin,
    containerRect ? containerRect.top + margin : margin,
  );
  const spaceBelow = lowerLimit - menuRect.bottom;
  const spaceAbove = menuRect.top - upperLimit;
  if ((panelRect.bottom > lowerLimit || spaceBelow < 116) && spaceAbove > 80) {
    menu.classList.add("menu-open-up");
    panel.style.maxHeight = `${Math.max(96, Math.floor(spaceAbove - 8))}px`;
    return;
  }
  panel.style.maxHeight = `${Math.max(96, Math.floor(spaceBelow - 8))}px`;
}

function render() {
  renderMetrics();
  renderJobs();
  renderPipeline();
  renderActivities();
  renderTasks();
}

function renderMetrics() {
  const activeCandidates = state.candidates.filter(
    (candidate) => !["hired", "rejected"].includes(candidate.stage),
  );
  const interviewCount = state.candidates.filter((candidate) => candidate.stage === "interview").length;
  const slaRisk = state.candidates.filter((candidate) => isFollowUpRiskCandidate(candidate)).length;
  const offerCount = state.candidates.filter((candidate) => ["offer", "hired"].includes(candidate.stage)).length;
  const pendingOfferCount = state.candidates.filter((candidate) => candidate.stage === "offer").length;
  const hiredCount = state.candidates.filter((candidate) => candidate.stage === "hired").length;
  const inProgressCount = state.candidates.filter((candidate) => ["screening", "interview"].includes(candidate.stage)).length;
  const conversion = offerCount ? Math.round((hiredCount / offerCount) * 100) : 0;

  elements.activeCandidatesMetric.textContent = activeCandidates.length;
  elements.interviewsMetric.textContent = interviewCount;
  elements.slaMetric.textContent = slaRisk;
  elements.conversionMetric.textContent = `${conversion}%`;
  if (elements.activeCandidatesDetail) elements.activeCandidatesDetail.textContent = `${inProgressCount} in progress · ${slaRisk} at risk`;
  if (elements.interviewsDetail) elements.interviewsDetail.textContent = interviewCount ? "Next action ready" : "No interview scheduled";
  if (elements.slaDetail) elements.slaDetail.textContent = slaRisk ? "Action required today" : "No urgent risk";
  if (elements.conversionDetail) elements.conversionDetail.textContent = `${hiredCount} hired from ${offerCount} offers`;
  if (elements.topActiveCandidatesPill) {
    elements.topActiveCandidatesPill.textContent = `${activeCandidates.length} Active · ${slaRisk} Follow-up Risk`;
  }
  elements.sidebarPipelineCount.textContent = activeCandidates.length;
  elements.commercialActiveMetric.textContent = activeCandidates.length;
  elements.commercialJobMetric.textContent = state.blueprints.filter((blueprint) => blueprint.status === "on").length;
  elements.commercialSlaMetric.textContent = slaRisk;
  elements.focusPills?.forEach((pill) => {
    const focus = pill.dataset.focusStage;
    if (focus === "risk") pill.textContent = `${slaRisk} Follow-up Risk`;
    if (focus === "interview") pill.textContent = `${interviewCount} Interview This Week`;
    if (focus === "offer") pill.textContent = `${pendingOfferCount} Offer Pending`;
  });
  elements.kpiFilterCards?.forEach((card) => {
    const isActive = activeKpiFilter === (card.dataset.kpiFilter || "");
    card.classList.toggle("active", isActive);
    card.setAttribute("aria-pressed", String(isActive));
  });
}

function renderJobs() {
  elements.jobsList.innerHTML = "";
  const activeBlueprints = state.blueprints.filter((blueprint) => blueprint.status === "on");
  const offBlueprints = state.blueprints.filter((blueprint) => blueprint.status !== "on");
  const activeCount = activeBlueprints.length;
  elements.sidebarJobsCount.textContent = activeCount;

  if (!state.blueprints.length) {
    elements.jobsList.innerHTML = `
      <div class="empty-state apple-empty compact-empty">
        <h3>Belum ada jobdesc</h3>
        <p>Buat standar posisi pertama, lalu Import CV atau Pilih CV untuk mulai analisis kandidat.</p>
      </div>
    `;
    return;
  }

  const activeGroup = document.createElement("section");
  activeGroup.className = "blueprint-simple-group active";
  activeGroup.innerHTML = `<h3>AKTIF</h3>`;

  if (activeBlueprints.length) {
    const activeList = document.createElement("div");
    activeList.className = "blueprint-simple-list";
    activeBlueprints.forEach((blueprint) => activeList.append(createSimpleBlueprintRow(blueprint, "active")));
    activeGroup.append(activeList);
  } else {
    activeGroup.insertAdjacentHTML(
      "beforeend",
      `<div class="empty-state apple-empty compact-empty"><h3>Belum ada jobdesc ON</h3><p>Aktifkan jobdesc OFF agar bisa dipakai untuk scoring CV.</p></div>`,
    );
  }

  elements.jobsList.append(activeGroup);

  const offSection = document.createElement("section");
  offSection.className = "blueprint-simple-off-section";

  if (offBlueprints.length) {
    offSection.innerHTML = `
      <button type="button" class="button button-secondary show-off-blueprints-btn">Lihat Jobdesc OFF (${offBlueprints.length})</button>
      <div class="blueprint-off-panel" hidden>
        <div class="blueprint-off-header">
          <h3>Jobdesc OFF (${offBlueprints.length})</h3>
          <button type="button" class="icon-button close-off-blueprints-btn" aria-label="Tutup Jobdesc OFF">×</button>
        </div>
        <div class="blueprint-simple-list off-list"></div>
      </div>
    `;
    const offPanel = offSection.querySelector(".blueprint-off-panel");
    const offList = offSection.querySelector(".off-list");
    offBlueprints.forEach((blueprint) => offList.append(createSimpleBlueprintRow(blueprint, "off")));

    offSection.querySelector(".show-off-blueprints-btn").addEventListener("click", () => {
      offPanel.hidden = false;
      offSection.querySelector(".show-off-blueprints-btn").hidden = true;
    });
    offSection.querySelector(".close-off-blueprints-btn").addEventListener("click", () => {
      offPanel.hidden = true;
      offSection.querySelector(".show-off-blueprints-btn").hidden = false;
    });
  } else {
    offSection.innerHTML = `<button type="button" class="button button-secondary show-off-blueprints-btn" disabled>Lihat Jobdesc OFF (0)</button>`;
  }

  elements.jobsList.append(offSection);
}

function createSimpleBlueprintRow(blueprint, mode) {
  const row = document.createElement("article");
  row.className = `blueprint-simple-row ${mode}`;
  const candidateStats = getBlueprintCandidateStats(blueprint);
  row.innerHTML = `
    <span class="blueprint-status-pill ${mode === "active" ? "on" : "off"}">${mode === "active" ? "Aktif" : "Off"}</span>
    <div class="jobdesc-row-main">
      <button class="blueprint-simple-title detail-blueprint-btn" type="button">${escapeHtml(blueprint.positionName)}</button>
      <small>${escapeHtml(
        [
          blueprint.businessType || "-",
          titleCase(blueprint.positionLevel),
          [blueprint.minimumEducation || "S1", blueprint.fieldOfStudy].filter(Boolean).join(" "),
          `${blueprint.minimumExperience || blueprint.scoring?.minExperience || 1} thn`,
        ].join(" • "),
      )}</small>
    </div>
    <div class="blueprint-candidate-stats" aria-label="Ringkasan kandidat ${escapeHtml(blueprint.positionName)}">
      ${renderBlueprintStatButton("match", `${candidateStats.match} Match`, candidateStats.match, blueprint.positionName)}
      ${renderBlueprintStatButton("review", `${candidateStats.review} Review`, candidateStats.review, blueprint.positionName)}
    </div>
    <div class="blueprint-simple-actions">
      ${
        mode === "active"
          ? `<details class="blueprint-action-menu simple-action-menu">
              <summary class="mini-button more-blueprint-btn dots-menu-btn" aria-label="Aksi untuk ${escapeHtml(blueprint.positionName)}">...</summary>
              <div class="blueprint-menu-panel" role="menu">
                <button class="use-job-btn" type="button">Import CV</button>
                <button class="pick-stored-cv-btn" type="button">Pilih CV</button>
                <button class="edit-blueprint-btn" type="button">Edit Jobdesc</button>
                <button class="toggle-blueprint-btn" type="button">Nonaktifkan</button>
                <button class="delete-blueprint-btn danger-menu-item" type="button">Hapus</button>
              </div>
            </details>`
          : `<details class="blueprint-action-menu simple-action-menu">
              <summary class="mini-button more-blueprint-btn dots-menu-btn" aria-label="Aksi untuk ${escapeHtml(blueprint.positionName)}">...</summary>
              <div class="blueprint-menu-panel" role="menu">
                <button class="activate-blueprint-btn" type="button">Aktifkan</button>
                <button class="edit-blueprint-btn" type="button">Edit Jobdesc</button>
                <button class="delete-blueprint-btn danger-menu-item" type="button">Hapus</button>
              </div>
            </details>`
      }
    </div>
  `;

  row.querySelectorAll(".detail-blueprint-btn").forEach((button) => {
    button.addEventListener("click", () => showBlueprintDetails(blueprint.id));
  });

  row.querySelector(".use-job-btn")?.addEventListener("click", () => {
    elements.importTargetRoleSelect.value = blueprint.positionName;
    elements.importDialog.showModal();
  });
  row.querySelector(".pick-stored-cv-btn")?.addEventListener("click", () => openStoredCvPicker(blueprint.id));
  row.querySelector(".edit-blueprint-btn")?.addEventListener("click", () => loadBlueprintForEdit(blueprint.id));
  row.querySelector(".toggle-blueprint-btn")?.addEventListener("click", () => setBlueprintStatus(blueprint.id, "off"));
  row.querySelector(".activate-blueprint-btn")?.addEventListener("click", () => setBlueprintStatus(blueprint.id, "on"));
  row.querySelector(".delete-blueprint-btn")?.addEventListener("click", () => deleteBlueprint(blueprint.id));
  row.querySelectorAll(".blueprint-stat-chip:not(.disabled)").forEach((button) => {
    button.addEventListener("click", () => {
      focusCandidatesForBlueprint(blueprint.positionName, button.dataset.fitFilter || "all");
    });
  });

  return row;
}

function getBlueprintCandidateStats(blueprint) {
  const candidates = state.candidates.filter((candidate) => candidate.role === blueprint.positionName);
  const threshold = getBlueprintMatchThreshold(blueprint);
  const match = candidates.filter((candidate) => Number(candidate.score || 0) >= threshold).length;
  return {
    total: candidates.length,
    match,
    review: Math.max(candidates.length - match, 0),
  };
}

function renderBlueprintStatButton(filter, label, count, positionName) {
  const fitFilter = filter;
  if (!count) {
    return `<span class="blueprint-stat-chip disabled ${filter}" aria-label="Belum ada ${escapeHtml(label)} untuk ${escapeHtml(positionName)}">${escapeHtml(label)}</span>`;
  }
  return `<button class="blueprint-stat-chip ${filter}" type="button" data-fit-filter="${fitFilter}" aria-label="Lihat ${escapeHtml(label)} untuk ${escapeHtml(positionName)}">${escapeHtml(label)}</button>`;
}

function getBlueprintMatchThreshold(blueprint) {
  return Number(blueprint?.scoring?.autoScreenThreshold ?? 85);
}

function candidateMatchesFitFilter(candidate, fitFilter, role) {
  if (fitFilter === "all") return true;
  const blueprint = findActiveBlueprintByTitle(role) || state.blueprints.find((item) => item.positionName === role);
  const threshold = getBlueprintMatchThreshold(blueprint);
  const isMatch = Number(candidate.score || 0) >= threshold;
  return fitFilter === "match" ? isMatch : !isMatch;
}

function focusCandidatesForBlueprint(positionName, fitFilter = "all") {
  hydrateRoleFilter();
  const roleExists = Array.from(elements.roleFilter.options).some((option) => option.value === positionName);
  elements.searchInput.value = "";
  elements.globalSearchInput.value = "";
  elements.stageFilter.value = "all";
  elements.roleFilter.value = roleExists ? positionName : "all";
  candidateFitFilter = fitFilter;
  selectedCandidateIds.clear();
  renderPipeline();

  const pipelinePanel = document.querySelector("#pipeline");
  pipelinePanel?.scrollIntoView({ behavior: "smooth", block: "start" });
  if (window.location.hash !== "#pipeline") {
    history.replaceState(null, "", "#pipeline");
  }
  elements.sidebarNavLinks.forEach((item) => {
    item.classList.toggle("active", item.getAttribute("href") === "#pipeline");
  });
}

function showBlueprintDetails(blueprintId) {
  const blueprint = state.blueprints.find((item) => item.id === blueprintId);
  if (!blueprint) return;

  elements.blueprintDetailTitle.textContent = blueprint.positionName;
  const qualificationSummary = [
    blueprint.businessType,
    titleCase(blueprint.positionLevel),
    [blueprint.minimumEducation || "S1", blueprint.fieldOfStudy].filter(Boolean).join(" "),
    `${blueprint.minimumExperience || blueprint.scoring?.minExperience || 1} tahun`,
  ].filter(Boolean).join(" • ");
  elements.blueprintDetailContent.innerHTML = `
    <section class="blueprint-detail-hero">
      <div>
        <p class="eyebrow">Detail Jobdesc</p>
        <h3>${escapeHtml(blueprint.positionName)}</h3>
        <p>${escapeHtml(qualificationSummary)}</p>
      </div>
      <span class="score-pill ${blueprint.status === "on" ? "good" : "mid"}">
        ${blueprint.status === "on" ? "Aktif" : "Nonaktif"}
      </span>
    </section>

    <div class="blueprint-detail-grid">
      <section>
        <h3>Tugas dan Tanggung Jawab</h3>
        ${renderBlueprintDetailList(blueprint.mainResponsibilities)}
      </section>
      <section>
        <h3>Kualifikasi</h3>
        ${renderBlueprintDetailList(blueprint.jobRequirements)}
      </section>
    </div>

    <section class="blueprint-detail-card">
      <h3>Preferensi Tambahan</h3>
      <p class="dialog-note">${escapeHtml(blueprint.preferences || "Tidak ada preferensi tambahan.")}</p>
    </section>

    <div class="blueprint-actions">
      <button type="button" class="button button-primary detail-import-cv-btn">Import CV</button>
      <button type="button" class="button button-secondary detail-pick-cv-btn">Pilih CV</button>
      <button type="button" class="button button-ghost detail-edit-jobdesc-btn">Edit Jobdesc</button>
    </div>
  `;
  elements.blueprintDetailContent.querySelector(".detail-import-cv-btn")?.addEventListener("click", () => {
    elements.blueprintDetailDialog.close();
    elements.importTargetRoleSelect.value = blueprint.positionName;
    elements.importDialog.showModal();
  });
  elements.blueprintDetailContent.querySelector(".detail-pick-cv-btn")?.addEventListener("click", () => {
    elements.blueprintDetailDialog.close();
    openStoredCvPicker(blueprint.id);
  });
  elements.blueprintDetailContent.querySelector(".detail-edit-jobdesc-btn")?.addEventListener("click", () => {
    elements.blueprintDetailDialog.close();
    loadBlueprintForEdit(blueprint.id);
  });
  elements.blueprintDetailDialog.showModal();
}

function renderBlueprintDetailList(items) {
  const cleanItems = normalizeLines(items);
  if (!cleanItems.length) return `<p class="muted-line">Belum ditentukan.</p>`;
  return `<ul class="blueprint-detail-list">${cleanItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

async function analyzeBlueprintBrief() {
  const formData = new FormData(elements.blueprintForm);
  const brief = {
    positionName: formData.get("positionName").trim(),
    companyName: formData.get("companyName").trim(),
    businessType: formData.get("businessType").trim(),
    roleHolder: formData.get("roleHolder").trim(),
    positionLevel: formData.get("positionLevel"),
    preferences: formData.get("preferences").trim(),
  };

  if (!brief.positionName || !brief.companyName || !brief.businessType || !brief.roleHolder) {
    elements.blueprintPreview.className = "blueprint-preview empty-state";
    elements.blueprintPreview.innerHTML = `
      <h3>Brief belum lengkap</h3>
      <p>Isi minimal nama posisi, perusahaan, jenis usaha, role, dan level jabatan terlebih dahulu.</p>
    `;
    return;
  }

  elements.analyzeBlueprintBtn.disabled = true;
  elements.analyzeBlueprintBtn.textContent = "AI menyusun blueprint...";
  elements.blueprintPreview.className = "blueprint-preview empty-state";
  elements.blueprintPreview.innerHTML = `
    <h3>AI sedang membuat Job Blueprint</h3>
    <p>Engine AI aktif membaca brief, level jabatan, industri, dan preferensi untuk memprediksi tanggung jawab, tantangan, dan persyaratan jabatan.</p>
  `;

  try {
    const aiBlueprint = await requestBlueprintGeneration(brief);
    activeBlueprintDraft = normalizeBlueprint({
      id: "",
      status: "draft",
      ...brief,
      ...aiBlueprint,
      scoring: { autoScreenThreshold: thresholdForLevel(brief.positionLevel) },
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    activeBlueprintDraft = generateBlueprintRecommendation(brief);
    activeBlueprintDraft.aiWarnings = [`AI belum berhasil: ${error.message}. Draft sementara memakai rule lokal.`];
  } finally {
    elements.analyzeBlueprintBtn.disabled = false;
    elements.analyzeBlueprintBtn.textContent = "Generate Job Blueprint";
  }

  renderBlueprintPreview(activeBlueprintDraft);
}

function saveJobdescInput() {
  const formData = new FormData(elements.blueprintForm);
  const positionName = formData.get("positionName").trim();
  const businessType = formData.get("businessType").trim();
  const responsibilities = formData.get("responsibilities").trim();
  const positionLevel = formData.get("positionLevel");
  const minimumEducation = formData.get("minimumEducation");
  const fieldOfStudy = formData.get("fieldOfStudy").trim();
  const minimumExperience = Number(formData.get("minimumExperience") || 1);
  const preferences = formData.get("preferences").trim();

  if (!positionName || !businessType || !responsibilities) {
    elements.blueprintForm.reportValidity();
    return;
  }

  const requirements = buildJobdescRequirements(minimumEducation, fieldOfStudy, minimumExperience, businessType, preferences);
  const savedBlueprint = saveJobdescDirect({
    ...(activeBlueprintDraft?.id ? activeBlueprintDraft : {}),
    id: activeBlueprintDraft?.id || "",
    status: activeBlueprintDraft?.status || "on",
    positionName,
    companyName: "Jobdesc",
    businessType,
    roleHolder: responsibilities,
    positionLevel,
    minimumEducation,
    fieldOfStudy,
    minimumExperience,
    preferences,
    mainResponsibilities: parseLines(responsibilities),
    roleChallenges: [],
    jobRequirements: requirements,
    kpiOrientation: parseLines(responsibilities),
    administrativeRequirements: requirements,
    softSkills: [],
    hardSkills: [],
    discProfile: recommendDiscProfile(positionName, positionLevel, responsibilities),
    scoring: {
      minExperience: minimumExperience,
      mustHaveSkills: normalizeTerms([responsibilities, businessType, fieldOfStudy, preferences]),
      niceHaveSkills: [],
      keywords: normalizeTerms([responsibilities, businessType, fieldOfStudy, preferences]),
      disqualifiers: [],
      autoScreenThreshold: Number(activeBlueprintDraft?.scoring?.autoScreenThreshold || thresholdForLevel(positionLevel)),
    },
    createdAt: activeBlueprintDraft?.createdAt || new Date().toISOString(),
  }, activeBlueprintDraft?.status === "off" ? "off" : "on");

  resetBlueprintBuilder();
  hideBlueprintBuilder();
  pushActivity(`Jobdesc ${savedBlueprint.positionName} tersimpan`);
  saveState();
  renderActivities();
}

function saveJobdescDirect(blueprintDraft, status = "on") {
  const normalized = normalizeBlueprint({ ...blueprintDraft, status });
  let savedBlueprint = normalized;
  const existingIndex = state.blueprints.findIndex((blueprint) => blueprint.id === normalized.id);
  if (existingIndex >= 0) {
    state.blueprints[existingIndex] = normalized;
    savedBlueprint = state.blueprints[existingIndex];
  } else {
    savedBlueprint = normalizeBlueprint({
      ...normalized,
      id: `blueprint-${Date.now()}`,
      createdAt: new Date().toISOString(),
    });
    state.blueprints.unshift(savedBlueprint);
  }

  if (status === "on") {
    state.blueprints = state.blueprints.map((blueprint) =>
      blueprint.id !== savedBlueprint.id && blueprint.positionName.toLowerCase() === savedBlueprint.positionName.toLowerCase()
        ? { ...blueprint, status: blueprint.status === "archive" ? "archive" : "off" }
        : blueprint,
    );
  }

  activeBlueprintDraft = null;
  saveState();
  hydrateRoleFilter();
  render();
  return state.blueprints.find((blueprint) => blueprint.id === savedBlueprint.id) ?? savedBlueprint;
}

function buildJobdescRequirements(education, fieldOfStudy, experience, businessType, preferences = "") {
  return dedupe([
    `Pendidikan minimal ${education}`,
    fieldOfStudy ? `Jurusan ${fieldOfStudy}` : "",
    `Pengalaman kerja minimal ${experience} tahun`,
    `Pengalaman di bidang ${businessType} atau kompleksitas yang serupa`,
    ...parseLines(preferences),
  ]);
}

function extractEducationRequirement(text = "") {
  const upper = String(text).toUpperCase();
  if (upper.includes("S2")) return "S2";
  if (upper.includes("S1")) return "S1";
  if (upper.includes("D3")) return "D3";
  if (upper.includes("SMA") || upper.includes("SMK")) return "SMA";
  return "S1";
}

function extractExperienceRequirement(text = "") {
  const match = String(text).match(/(?:minimal|min\.?)\s*(\d{1,2})\s*tahun|(\d{1,2})\s*tahun/i);
  const value = Number(match?.[1] || match?.[2] || 1);
  return Math.max(1, Math.min(value, 20));
}

function renderBlueprintPreview(blueprint) {
  elements.blueprintPreview.className = "blueprint-preview";
  elements.blueprintPreview.innerHTML = `
    <div class="blueprint-preview-header">
      <div>
        <p class="eyebrow">Jobdesc tersimpan</p>
        <h3>${blueprint.positionName}</h3>
        <p>${blueprint.businessType} • ${titleCase(blueprint.positionLevel)} • ${[blueprint.minimumEducation || "S1", blueprint.fieldOfStudy].filter(Boolean).join(" ")} • ${blueprint.minimumExperience || blueprint.scoring?.minExperience || 1} tahun</p>
      </div>
      <span class="private-badge">${blueprint.status === "on" ? "ON" : "OFF"}</span>
    </div>

    <div class="blueprint-editor-grid">
      <label>
        Tugas dan Tanggung Jawab
        <textarea data-blueprint-field="mainResponsibilities">${(blueprint.mainResponsibilities ?? []).join("\n")}</textarea>
      </label>
      <label>
        Kualifikasi
        <textarea data-blueprint-field="jobRequirements">${(blueprint.jobRequirements ?? []).join("\n")}</textarea>
      </label>
      <label>
        Preferensi Tambahan
        <textarea data-blueprint-field="preferences">${blueprint.preferences}</textarea>
      </label>
    </div>

    <div class="scoring-model-card">
      <p class="eyebrow">Analisis kandidat</p>
      <div class="scoring-model-grid">
        <span><strong>Jobdesc</strong>Standar posisi</span>
        <span><strong>CV</strong>Profil kandidat</span>
        <span><strong>Fit</strong>Nilai kecocokan</span>
      </div>
      <label>
        Batas rekomendasi
        <input data-blueprint-field="autoScreenThreshold" type="number" min="50" max="99" value="${blueprint.scoring.autoScreenThreshold}">
      </label>
    </div>

    <div class="blueprint-actions">
      <button type="button" class="button button-primary save-blueprint-btn">${blueprint.id ? "Update Jobdesc" : "Save Jobdesc"}</button>
      <button type="button" class="button button-ghost archive-draft-btn">Save OFF</button>
    </div>
  `;

  elements.blueprintPreview.querySelector(".save-blueprint-btn").addEventListener("click", () => saveBlueprintFromPreview("on"));
  elements.blueprintPreview.querySelector(".archive-draft-btn").addEventListener("click", () => saveBlueprintFromPreview("off"));
}

async function saveBlueprintFromPreview(status = "on") {
  if (!activeBlueprintDraft) return;
  const saveButton = elements.blueprintPreview.querySelector(".save-blueprint-btn");
  if (saveButton) {
    saveButton.disabled = true;
    saveButton.textContent = status === "on" ? "Menyimpan & scoring..." : "Menyimpan...";
  }
  const updatedBlueprint = readBlueprintPreview(activeBlueprintDraft);
  updatedBlueprint.status = status;
  updatedBlueprint.scoring = buildScoringModelFromBlueprint(updatedBlueprint);

  const existingIndex = state.blueprints.findIndex((blueprint) => blueprint.id === updatedBlueprint.id);
  if (existingIndex >= 0) {
    state.blueprints[existingIndex] = normalizeBlueprint(updatedBlueprint);
  } else {
    updatedBlueprint.id = `blueprint-${Date.now()}`;
    updatedBlueprint.createdAt = new Date().toISOString();
    state.blueprints.unshift(normalizeBlueprint(updatedBlueprint));
  }

  if (status === "on") {
    state.blueprints = state.blueprints.map((blueprint) =>
      blueprint.id !== updatedBlueprint.id && blueprint.positionName.toLowerCase() === updatedBlueprint.positionName.toLowerCase()
        ? { ...blueprint, status: blueprint.status === "archive" ? "archive" : "off" }
        : blueprint,
    );
  }

  const savedBlueprint = state.blueprints.find((blueprint) => blueprint.id === updatedBlueprint.id) ?? normalizeBlueprint(updatedBlueprint);
  pushActivity(`Job blueprint ${savedBlueprint.positionName} disimpan (${status.toUpperCase()})`);
  saveState();
  hydrateRoleFilter();
  render();
  activeBlueprintDraft = savedBlueprint;
  renderBlueprintPreview(activeBlueprintDraft);

  if (status === "on") {
    pushActivity(`Jobdesc ${savedBlueprint.positionName} aktif. Import CV atau Pilih CV untuk mulai analisis.`);
  }
}

function readBlueprintPreview(baseBlueprint) {
  const value = (field) => elements.blueprintPreview.querySelector(`[data-blueprint-field="${field}"]`)?.value ?? "";
  return {
    ...baseBlueprint,
    mainResponsibilities: parseLines(value("mainResponsibilities")),
    roleChallenges: parseLines(value("roleChallenges")),
    jobRequirements: parseLines(value("jobRequirements")),
    kpiOrientation: parseLines(value("mainResponsibilities")),
    softSkills: [],
    hardSkills: [],
    administrativeRequirements: parseLines(value("jobRequirements")),
    preferences: value("preferences").trim(),
    minimumEducation: baseBlueprint.minimumEducation || extractEducationRequirement(value("jobRequirements")),
    fieldOfStudy: baseBlueprint.fieldOfStudy || "",
    minimumExperience: baseBlueprint.minimumExperience || extractExperienceRequirement(value("jobRequirements")),
    discProfile: baseBlueprint.discProfile,
    scoring: {
      ...baseBlueprint.scoring,
      autoScreenThreshold: Number(value("autoScreenThreshold") || 85),
    },
  };
}

async function scoreCandidatesForBlueprint(blueprint) {
  const candidates = state.candidates.filter((candidate) => candidate.role.toLowerCase() === blueprint.positionName.toLowerCase());
  if (!candidates.length) {
    pushActivity(`Blueprint ${blueprint.positionName} siap. Belum ada CV untuk discoring.`);
    saveState();
    render();
    return;
  }

  pushActivity(`AI mulai Blueprint Fit Scoring untuk ${candidates.length} kandidat ${blueprint.positionName}`);
  saveState();
  render();

  for (const candidate of candidates) {
    try {
      const aiFitScore = await requestBlueprintFitScore(candidate, blueprint);
      applyBlueprintFitScore(candidate, blueprint, aiFitScore);
    } catch (error) {
      markAiScoringFailed(candidate, blueprint, error);
    }
  }

  pushActivity(`AI Blueprint Fit Scoring selesai untuk ${candidates.length} kandidat ${blueprint.positionName}`);
  saveState();
  render();
}

function markAiScoringFailed(candidate, blueprint, error) {
  const previousScore = Number(candidate.aiFitScore?.score ?? candidate.score ?? 0);
  candidate.score = previousScore > 0 ? previousScore : null;
  candidate.scoreBreakdown = [
    `AI Fit Scoring belum berhasil: ${error.message}`,
    "Score final belum tersedia. Klik scoring ulang setelah API aktif/stabil.",
  ];
  candidate.aiFitScore = {
    blueprintId: blueprint.id,
    blueprintName: blueprint.positionName,
    score: candidate.score || 0,
    status: "AI scoring gagal",
    confidence: 0,
    componentScores: { responsibilityFit: 0, challengeFit: 0, requirementFit: 0 },
    reasons: candidate.scoreBreakdown,
    inferences: [],
    gaps: ["AI scoring belum berhasil; jangan gunakan score ini sebagai keputusan final."],
    interviewQuestions: [],
    parserMode: "AI Blueprint Fit Scoring gagal",
  };
}

function applyBlueprintFitScore(candidate, blueprint, fitScore = {}) {
  const score = Math.max(0, Math.min(Number(fitScore.score ?? 0), 99));
  const componentScores = fitScore.componentScores ?? {};
  candidate.score = score;
  candidate.scoreBreakdown = [
    `Blueprint Fit Score: ${score}/100 • ${fitScore.status || "Dinilai AI"}`,
    ...(fitScore.executiveSummary ? [fitScore.executiveSummary] : []),
    `Tanggung jawab utama fit: ${componentScores.responsibilityFit ?? "-"} / 100`,
    `Tantangan jabatan fit: ${componentScores.challengeFit ?? "-"} / 100`,
    `Persyaratan jabatan fit: ${componentScores.requirementFit ?? "-"} / 100`,
    ...(fitScore.reasons ?? []),
    ...(fitScore.gaps ?? []).map((gap) => `Gap/Risk: ${gap}`),
  ];
  candidate.aiFitScore = {
    blueprintId: blueprint.id,
    blueprintName: blueprint.positionName,
    score,
    status: fitScore.status || "Dinilai AI",
    confidence: Number(fitScore.confidence ?? 0),
    componentScores,
    executiveSummary: fitScore.executiveSummary || "",
    comparisonMatrix: Array.isArray(fitScore.comparisonMatrix) ? fitScore.comparisonMatrix : [],
    reasons: normalizeLines(fitScore.reasons),
    inferences: Array.isArray(fitScore.inferences) ? fitScore.inferences : [],
    gaps: normalizeLines(fitScore.gaps),
    interviewQuestions: normalizeLines(fitScore.interviewQuestions),
    parserMode: fitScore.parserMode || "AI Blueprint Fit Scoring",
  };
  candidate.history = [
    ...(candidate.history || []),
    `Blueprint Fit Scoring • ${blueprint.positionName} • ${score}/100`,
  ];
}

function startBlueprintScoringForRole(role) {
  const blueprint = findActiveBlueprintByTitle(role);
  if (!blueprint) return;
  scoreCandidatesForBlueprint(blueprint).catch((error) => {
    pushActivity(`Blueprint Fit Scoring belum berhasil untuk ${role}: ${error.message}`);
    saveState();
    render();
  });
}

function loadBlueprintForEdit(blueprintId) {
  const blueprint = state.blueprints.find((item) => item.id === blueprintId);
  if (!blueprint) return;
  elements.blueprintBuilderPanel.classList.remove("builder-hidden");
  elements.blueprintBuilderPanel.classList.add("builder-open");
  activeBlueprintDraft = structuredClone(blueprint);
  elements.blueprintForm.positionName.value = blueprint.positionName;
  elements.blueprintForm.businessType.value = blueprint.businessType;
  elements.blueprintForm.positionLevel.value = blueprint.positionLevel;
  elements.blueprintForm.minimumEducation.value = blueprint.minimumEducation || extractEducationRequirement(blueprint.jobRequirements?.join("\n"));
  elements.blueprintForm.fieldOfStudy.value = blueprint.fieldOfStudy || "";
  elements.blueprintForm.minimumExperience.value = String(blueprint.minimumExperience || blueprint.scoring?.minExperience || 1);
  elements.blueprintForm.responsibilities.value = (blueprint.mainResponsibilities?.length ? blueprint.mainResponsibilities : [blueprint.roleHolder]).join("\n");
  elements.blueprintForm.preferences.value = blueprint.preferences;
  elements.analyzeBlueprintBtn.textContent = "Simpan Perubahan";
  elements.blueprintPreview.hidden = true;
  elements.blueprintPreview.innerHTML = "";
  elements.blueprintBuilderPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function setBlueprintStatus(blueprintId, status) {
  const blueprint = state.blueprints.find((item) => item.id === blueprintId);
  if (!blueprint) return;
  blueprint.status = status;

  if (status === "on") {
    state.blueprints.forEach((item) => {
      if (item.id !== blueprintId && item.positionName.toLowerCase() === blueprint.positionName.toLowerCase() && item.status !== "archive") {
        item.status = "off";
      }
    });
  }

  pushActivity(`Blueprint ${blueprint.positionName} diubah menjadi ${status.toUpperCase()}`);
  saveState();
  hydrateRoleFilter();
  render();
  if (status === "on") {
    pushActivity(`Jobdesc ${blueprint.positionName} ON. Scoring berjalan saat CV diupload atau dipilih.`);
    saveState();
    render();
  }
}

function deleteBlueprint(blueprintId) {
  const blueprint = state.blueprints.find((item) => item.id === blueprintId);
  if (!blueprint) return;
  const confirmed = window.confirm(`Hapus jobdesc "${blueprint.positionName}"? Kandidat/CV tidak ikut dihapus.`);
  if (!confirmed) return;
  state.blueprints = state.blueprints.filter((item) => item.id !== blueprintId);
  if (activeBlueprintDraft?.id === blueprintId) resetBlueprintBuilder();
  pushActivity(`Jobdesc ${blueprint.positionName} dihapus dari library`);
  saveState();
  hydrateRoleFilter();
  render();
}

function openStoredCvPicker(blueprintId) {
  const blueprint = state.blueprints.find((item) => item.id === blueprintId);
  if (!blueprint || !elements.storedCvDialog) return;
  const reusableCandidates = state.candidates.filter((candidate) => candidate.cvText || candidate.fileName || candidate.summary);
  elements.storedCvTitle.textContent = `Pilih CV untuk ${blueprint.positionName}`;
  if (!reusableCandidates.length) {
    elements.storedCvContent.innerHTML = `
      <div class="empty-state apple-empty compact-empty">
        <h3>Belum ada CV</h3>
        <p>Upload CV baru terlebih dahulu, lalu CV itu bisa dipakai untuk jobdesc lain.</p>
      </div>
    `;
  } else {
    elements.storedCvContent.innerHTML = `
      <p class="dialog-note">Pilih satu atau beberapa CV yang sudah pernah diupload. Sistem akan membuat kandidat baru untuk jobdesc ini dari profile tersimpan.</p>
      <div class="stored-cv-list">
        ${reusableCandidates
          .map(
            (candidate) => `
              <label class="stored-cv-item">
                <input type="checkbox" value="${escapeHtml(candidate.id)}">
                <span>
                  <strong>${escapeHtml(candidate.name)}</strong>
                  <small>${escapeHtml(candidate.role)} • ${escapeHtml(candidate.fileName || candidate.source || "CV")}</small>
                </span>
              </label>
            `,
          )
          .join("")}
      </div>
      <div class="blueprint-actions stored-cv-actions">
        <button type="button" class="button button-primary attach-stored-cv-btn">Gunakan CV Terpilih</button>
        <button type="button" class="button button-ghost cancel-stored-cv-btn">Batal</button>
      </div>
    `;
    elements.storedCvContent.querySelector(".attach-stored-cv-btn").addEventListener("click", () => attachStoredCvsToBlueprint(blueprint.id));
    elements.storedCvContent.querySelector(".cancel-stored-cv-btn").addEventListener("click", () => elements.storedCvDialog.close());
  }
  elements.storedCvDialog.showModal();
}

function attachStoredCvsToBlueprint(blueprintId) {
  const blueprint = state.blueprints.find((item) => item.id === blueprintId);
  if (!blueprint) return;
  const selectedIds = [...elements.storedCvContent.querySelectorAll('input[type="checkbox"]:checked')].map((input) => input.value);
  if (!selectedIds.length) return;
  const sourceCandidates = selectedIds.map((id) => state.candidates.find((candidate) => candidate.id === id)).filter(Boolean);
  sourceCandidates.forEach((candidate) => {
    const candidateCopy = structuredClone(candidate);
    delete candidateCopy.id;
    delete candidateCopy.stage;
    delete candidateCopy.daysInStage;
    delete candidateCopy.history;
    delete candidateCopy.scoreBreakdown;
    delete candidateCopy.aiFitScore;
    addCandidate({
      ...candidateCopy,
      role: blueprint.positionName,
      source: "CV",
      nextStep: "",
    });
  });
  closeDialogElement(elements.storedCvDialog);
  startBlueprintScoringForRole(blueprint.positionName);
}

function resetBlueprintBuilder() {
  activeBlueprintDraft = null;
  elements.blueprintForm.reset();
  elements.analyzeBlueprintBtn.textContent = "Simpan";
  elements.blueprintPreview.hidden = true;
  elements.blueprintPreview.className = "blueprint-preview empty-state";
  elements.blueprintPreview.innerHTML = "";
}

function generateBlueprintRecommendation(brief) {
  const minExperience = minExperienceForLevel(brief.positionLevel);
  const softSkills = inferSoftSkills(brief.positionName, brief.roleHolder, brief.positionLevel);
  const hardSkills = inferHardSkills(brief.positionName, brief.businessType, brief.roleHolder);
  const mainResponsibilities = inferMainResponsibilities(brief);
  const roleChallenges = inferRoleChallenges(brief.positionName, brief.businessType, brief.positionLevel);
  const jobRequirements = inferJobRequirements(brief.positionName, brief.businessType, brief.positionLevel, brief.roleHolder, minExperience);
  const kpiOrientation = mainResponsibilities;
  const administrativeRequirements = jobRequirements;
  const discProfile = recommendDiscProfile(brief.positionName, brief.positionLevel, brief.roleHolder);

  const blueprint = {
    id: "",
    status: "on",
    ...brief,
    mainResponsibilities,
    roleChallenges,
    jobRequirements,
    kpiOrientation,
    softSkills,
    hardSkills,
    administrativeRequirements,
    discProfile,
    scoring: {
      minExperience,
      mustHaveSkills: hardSkills.slice(0, 5).map((item) => item.toLowerCase()),
      niceHaveSkills: softSkills.slice(0, 5).map((item) => item.toLowerCase()),
      keywords: [...kpiOrientation, brief.businessType, brief.roleHolder].map((item) => item.toLowerCase()),
      disqualifiers: [],
      autoScreenThreshold: thresholdForLevel(brief.positionLevel),
    },
    createdAt: new Date().toISOString(),
  };

  return { ...normalizeBlueprint(blueprint), id: "" };
}

function inferMainResponsibilities(brief) {
  return [
    `Memimpin dan memastikan eksekusi role utama: ${brief.roleHolder}`,
    `Menerjemahkan target bisnis ${brief.businessType} menjadi prioritas kerja jabatan ${brief.positionName}`,
    `Mengelola proses, tim, stakeholder, dan keputusan operasional pada level ${titleCase(brief.positionLevel)}`,
    `Memonitor KPI, risiko, dan perbaikan berkelanjutan agar output jabatan tercapai`,
  ];
}

function inferRoleChallenges(positionName = "", businessType = "", level = "manager") {
  const lower = `${positionName} ${businessType}`.toLowerCase();
  const challenges = [
    `Menjaga konsistensi output pada level ${titleCase(level)} saat kebutuhan bisnis berubah cepat`,
    `Mengelola ekspektasi stakeholder lintas fungsi tanpa kehilangan kualitas eksekusi`,
    `Membuat keputusan berbasis data ketika informasi operasional tidak selalu lengkap`,
  ];
  if (/hr|hc|human|people|talent|payroll|industrial|operation/i.test(lower)) {
    challenges.unshift("Menjaga akurasi proses HC seperti administrasi karyawan, payroll, compliance, dan employee relation pada skala organisasi yang relevan");
    challenges.push("Mengubah fungsi HC dari administratif menjadi partner bisnis yang berdampak ke produktivitas");
  }
  if (/manufactur|pabrik|retail|distribusi|operation|warehouse|logistic/i.test(lower)) {
    challenges.push("Menangani kompleksitas tenaga kerja operasional, produktivitas, shift, dan potensi isu hubungan industrial");
  }
  return challenges;
}

function inferJobRequirements(positionName = "", businessType = "", level = "manager", roleHolder = "", minExperience = 5) {
  return [
    `Pengalaman ${minExperience}-${minExperience + 3} tahun pada fungsi, industri, atau kompleksitas jabatan yang relevan`,
    `Pernah menjalankan atau memimpin scope kerja yang mirip dengan: ${roleHolder || positionName}`,
    `Memiliki exposure pada industri ${businessType} atau lingkungan kerja dengan kompleksitas serupa`,
    `Mampu bekerja pada level ${titleCase(level)} dengan kedewasaan pengambilan keputusan yang sesuai`,
    "Mampu menjelaskan bukti pencapaian, skala tanggung jawab, dan tantangan yang pernah ditangani",
  ];
}

function buildScoringModelFromBlueprint(blueprint) {
  return {
    minExperience: minExperienceForLevel(blueprint.positionLevel),
    mustHaveSkills: normalizeTerms(blueprint.jobRequirements).slice(0, 8),
    niceHaveSkills: normalizeTerms(blueprint.mainResponsibilities).slice(0, 8),
    keywords: normalizeTerms([
      ...blueprint.mainResponsibilities,
      ...blueprint.roleChallenges,
      ...blueprint.jobRequirements,
      blueprint.businessType,
      blueprint.roleHolder,
      blueprint.preferences,
    ]),
    disqualifiers: [],
    autoScreenThreshold: Number(blueprint.scoring?.autoScreenThreshold ?? thresholdForLevel(blueprint.positionLevel)),
  };
}

function inferLevelFromJob(job) {
  const text = `${job.title} ${job.publicAd?.summary ?? ""}`.toLowerCase();
  if (text.includes("officer") || text.includes("staff")) return "operative";
  if (text.includes("partner") || text.includes("specialist")) return "supervisor";
  if (text.includes("manager")) return "manager";
  return "manager";
}

function minExperienceForLevel(level) {
  const map = {
    operative: 1,
    "team leader": 2,
    supervisor: 3,
    manager: 5,
    "general manager": 8,
    "vice president": 10,
    director: 12,
  };
  return map[level] ?? 5;
}

function thresholdForLevel(level) {
  const map = {
    operative: 78,
    "team leader": 80,
    supervisor: 82,
    manager: 85,
    "general manager": 87,
    "vice president": 88,
    director: 90,
  };
  return map[level] ?? 85;
}

function recommendKpiOrientation(level, positionName = "", roleHolder = "") {
  const text = `${level} ${positionName} ${roleHolder}`.toLowerCase();
  if (["general manager", "vice president", "director"].includes(level)) {
    return ["Menjaga target strategis", "Memperbaiki proses lintas fungsi", "Melakukan breakthrough bisnis"];
  }
  if (level === "manager") {
    return ["Menjaga target operasional", "Memperbaiki proses", text.includes("transformation") ? "Melakukan breakthrough terbatas" : "Membangun sistem kerja scalable"];
  }
  if (level === "supervisor" || level === "team leader") {
    return ["Menjaga target tim", "Memastikan jobdesc berjalan konsisten", "Memberi improvement proses harian"];
  }
  return ["Melakukan jobdesc dengan akurat", "Menjaga target individu", "Melaporkan hambatan kerja"];
}

function inferSoftSkills(positionName = "", roleHolder = "", level = "manager") {
  const text = `${positionName} ${roleHolder}`.toLowerCase();
  const skills = ["Problem solving", "Communication clarity", "Ownership"];
  if (["manager", "general manager", "vice president", "director"].includes(level)) {
    skills.push("Leadership", "Stakeholder management", "Decision making");
  }
  if (text.includes("hr") || text.includes("human") || text.includes("people")) {
    skills.push("Empathy with boundaries", "Confidentiality", "Coaching conversation");
  }
  if (text.includes("sales") || text.includes("marketing")) {
    skills.push("Persuasion", "Relationship building", "Commercial drive");
  }
  if (text.includes("operation") || text.includes("ops")) {
    skills.push("Process discipline", "Service orientation", "Crisis handling");
  }
  return [...new Set(skills)].slice(0, 8);
}

function inferHardSkills(positionName = "", businessType = "", roleHolder = "") {
  const text = `${positionName} ${businessType} ${roleHolder}`.toLowerCase();
  const skills = ["Reporting", "Documentation", "Data analysis"];
  if (text.includes("hr") || text.includes("human") || text.includes("people")) {
    skills.push("HRIS", "Payroll process", "Talent management", "Industrial relation", "People analytics");
  }
  if (text.includes("talent") || text.includes("recruit")) {
    skills.push("Sourcing", "Interviewing", "ATS management", "Candidate experience");
  }
  if (text.includes("finance") || text.includes("accounting")) {
    skills.push("Budgeting", "Financial analysis", "Compliance control", "Forecasting");
  }
  if (text.includes("sales") || text.includes("business development")) {
    skills.push("Pipeline management", "Negotiation", "CRM", "Revenue forecasting");
  }
  if (text.includes("retail") || text.includes("distribusi") || text.includes("operation")) {
    skills.push("SOP management", "Multi-branch operations", "Service SLA", "Inventory/process control");
  }
  return [...new Set(skills)].slice(0, 9);
}

function recommendDiscProfile(positionName = "", level = "manager", roleHolder = "") {
  const text = `${positionName} ${level} ${roleHolder}`.toLowerCase();
  if (text.includes("sales") || text.includes("marketing") || text.includes("business development")) {
    return { primary: "I", secondary: "D", support: "S", rationale: "Peran komersial membutuhkan influence tinggi, dorongan target, dan relasi yang kuat." };
  }
  if (text.includes("finance") || text.includes("payroll") || text.includes("compliance") || text.includes("operation")) {
    return { primary: "C", secondary: "D", support: "S", rationale: "Peran ini membutuhkan akurasi, disiplin proses, dan kemampuan mengambil keputusan operasional." };
  }
  if (["general manager", "vice president", "director"].includes(level)) {
    return { primary: "D", secondary: "I", support: "C", rationale: "Level senior membutuhkan arah, pengaruh lintas fungsi, dan kontrol keputusan strategis." };
  }
  if (text.includes("hr") || text.includes("people") || text.includes("talent")) {
    return { primary: "S", secondary: "C", support: "I", rationale: "Peran HC membutuhkan stabilitas, akurasi proses manusia, komunikasi, dan confidentiality." };
  }
  return { primary: "C", secondary: "S", support: "D", rationale: "Profil seimbang untuk menjaga kualitas eksekusi, konsistensi, dan problem solving." };
}

function formatDiscProfile(profile, multiline = false) {
  if (!profile) return "-";
  const parts = [
    `Primary: ${profile.primary}`,
    `Secondary: ${profile.secondary}`,
    `Support: ${profile.support}`,
    `Rationale: ${profile.rationale}`,
  ];
  return multiline ? parts.join("\n") : `${profile.primary}/${profile.secondary} dengan support ${profile.support}`;
}

function parseDiscProfile(value, fallback) {
  const text = String(value ?? "");
  const find = (label) => text.match(new RegExp(`${label}:\\s*([A-Z])`, "i"))?.[1]?.toUpperCase();
  return {
    primary: find("Primary") ?? fallback?.primary ?? "C",
    secondary: find("Secondary") ?? fallback?.secondary ?? "D",
    support: find("Support") ?? fallback?.support ?? "S",
    rationale: text.match(/Rationale:\s*(.+)/i)?.[1]?.trim() ?? fallback?.rationale ?? "",
  };
}

function titleCase(value) {
  return String(value ?? "")
    .split(" ")
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ""))
    .join(" ");
}

function showBlueprintBuilder() {
  elements.blueprintBuilderPanel.classList.remove("builder-hidden");
  elements.blueprintBuilderPanel.classList.add("builder-open");
  window.requestAnimationFrame(() => {
    elements.blueprintBuilderPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    elements.blueprintForm.querySelector('[name="positionName"]')?.focus({ preventScroll: true });
  });
}

function hideBlueprintBuilder() {
  elements.blueprintBuilderPanel.classList.add("builder-hidden");
  elements.blueprintBuilderPanel.classList.remove("builder-open");
  document.querySelector("#jobs")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function escapeHtml(value) {
  return repairDisplayText(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[char];
  });
}

function repairDisplayText(value) {
  return String(value ?? "")
    .replaceAll("â€¢", "•")
    .replaceAll("â€”", "—")
    .replaceAll("â€“", "–")
    .replaceAll("â€œ", "“")
    .replaceAll("â€", "”")
    .replaceAll("â€™", "’")
    .replaceAll("封封", "••••");
}

function openJobDialog() {
  resetBlueprintBuilder();
  showBlueprintBuilder();
}

function saveJobPosting(event) {
  event.preventDefault();
  const formData = new FormData(elements.jobForm);
  const job = {
    id: `job-${Date.now()}`,
    title: formData.get("title").trim(),
    department: formData.get("department").trim(),
    location: formData.get("location").trim(),
    workMode: formData.get("workMode"),
    employmentType: formData.get("employmentType"),
    publicAd: {
      summary: formData.get("summary").trim(),
      responsibilities: parseLines(formData.get("responsibilities")),
      requirements: parseLines(formData.get("requirements")),
      benefits: parseLines(formData.get("benefits")),
    },
    scoring: {
      minExperience: Number(formData.get("minExperience")),
      mustHaveSkills: parseTerms(formData.get("mustHaveSkills")),
      niceHaveSkills: parseTerms(formData.get("niceHaveSkills")),
      keywords: parseTerms(formData.get("keywords")),
      disqualifiers: parseTerms(formData.get("disqualifiers")),
      autoScreenThreshold: Number(formData.get("autoScreenThreshold")),
      internalNotes: formData.get("internalNotes").trim(),
    },
  };

  state.jobs.unshift(job);
  pushActivity(`Lowongan baru dibuat: ${job.title} • scoring khusus aktif`);
  saveState();
  hydrateRoleFilter();
  render();
  elements.jobDialog.close();
}

function copyJobAd(job) {
  const adText = [
    `${job.title} — ${job.department}`,
    `${job.location} • ${job.workMode} • ${job.employmentType}`,
    "",
    job.publicAd.summary,
    "",
    "Tanggung jawab:",
    ...job.publicAd.responsibilities.map((item) => `- ${item}`),
    "",
    "Kualifikasi:",
    ...job.publicAd.requirements.map((item) => `- ${item}`),
    "",
    "Benefit:",
    ...(job.publicAd.benefits.length ? job.publicAd.benefits : ["Akan dijelaskan saat proses rekrutmen"]).map(
      (item) => `- ${item}`,
    ),
  ].join("\n");

  navigator.clipboard?.writeText(adText);
  pushActivity(`Iklan lowongan ${job.title} disalin untuk publikasi`);
  saveState();
  renderActivities();
}

function parseLines(value) {
  return String(value ?? "")
    .split(/\n|;/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseTerms(value) {
  return String(value ?? "")
    .split(/,|\n|;/)
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function renderPipeline() {
  elements.pipelineBoard.innerHTML = "";
  syncSelectedCandidates();
  const searchTerm = elements.searchInput.value.trim().toLowerCase();
  const stageFilter = elements.stageFilter.value;
  const role = elements.roleFilter.value;

  const baseCandidates = state.candidates.filter((candidate) => {
    const haystack = `${candidate.name} ${candidate.role} ${candidate.source}`.toLowerCase();
    const matchesSearch = !searchTerm || haystack.includes(searchTerm);
    const matchesRole = role === "all" || candidate.role === role;
    return matchesSearch && matchesRole;
  });

  const fitFilteredCandidates = baseCandidates.filter((candidate) => {
    return candidateMatchesFitFilter(candidate, candidateFitFilter, role);
  });

  const kpiFilteredCandidates = fitFilteredCandidates.filter((candidate) => candidateMatchesKpiFilter(candidate, activeKpiFilter));

  const filteredCandidates = kpiFilteredCandidates.filter((candidate) => {
    return stageFilter === "all" || candidate.stage === stageFilter;
  });

  const summary = document.createElement("div");
  summary.className = `stage-summary-strip ${stageFilter !== "all" || activeKpiFilter !== "all" ? "has-active" : ""}`;
  stages.forEach((stage) => {
    const count = kpiFilteredCandidates.filter((candidate) => candidate.stage === stage.id).length;
    const chip = document.createElement("button");
    chip.className = `stage-chip ${stageFilter === stage.id ? "active" : stageFilter !== "all" ? "dimmed" : ""}`;
    chip.type = "button";
    chip.setAttribute("aria-pressed", String(stageFilter === stage.id));
    chip.innerHTML = `<span>${stage.label}</span><strong>${count}</strong>`;
    chip.addEventListener("click", (event) => {
      event.stopPropagation();
      elements.stageFilter.value = stageFilter === stage.id ? "all" : stage.id;
      renderPipeline();
    });
    summary.append(chip);
  });
  elements.pipelineBoard.append(summary);

  if (activeKpiFilter !== "all") {
    const kpiNotice = document.createElement("div");
    kpiNotice.className = "kpi-filter-notice followup-filter-notice";
    const filterCopy = getKpiFilterCopy(activeKpiFilter);
    kpiNotice.innerHTML = `
      <strong>${escapeHtml(filterCopy.title)}</strong>
      <span>${escapeHtml(filterCopy.body)}</span>
    `;
    elements.pipelineBoard.append(kpiNotice);
  }

  const sortedCandidates = [...filteredCandidates];

  elements.pipelineBoard.append(createBulkActionBar(sortedCandidates));

  const list = document.createElement("div");
  list.className = "candidate-list";

  if (!sortedCandidates.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.innerHTML = `
      <h3>Tidak ada kandidat yang cocok</h3>
      <p>Coba ubah kata kunci, stage, atau role filter.</p>
    `;
    list.append(emptyState);
  }

  sortedCandidates.forEach((candidate) => list.append(createCandidateCard(candidate)));
  elements.pipelineBoard.append(list);
}

function isFollowUpRiskCandidate(candidate) {
  return ["new", "screening", "interview"].includes(candidate.stage) && Number(candidate.daysInStage || 0) >= 3;
}

function candidateMatchesKpiFilter(candidate, filter) {
  switch (filter) {
    case "active":
      return !["hired", "rejected"].includes(candidate.stage);
    case "interview":
      return candidate.stage === "interview";
    case "followup":
      return isFollowUpRiskCandidate(candidate);
    case "offer":
      return ["offer", "hired"].includes(candidate.stage);
    default:
      return true;
  }
}

function getKpiFilterCopy(filter) {
  const copy = {
    active: {
      title: "Active Candidates aktif",
      body: "Menampilkan kandidat yang masih berjalan dan belum hired/rejected. Klik di luar area filter untuk kembali normal.",
    },
    interview: {
      title: "Interviews This Week aktif",
      body: "Menampilkan kandidat pada stage Interview. Klik di luar area filter untuk kembali normal.",
    },
    followup: {
      title: "Follow-up Risk aktif",
      body: "Menampilkan kandidat yang sudah perlu ditindak hari ini. Klik di luar area filter untuk kembali normal.",
    },
    offer: {
      title: "Offer-to-Hire aktif",
      body: "Menampilkan kandidat pada tahap Offer dan Hired. Klik di luar area filter untuk kembali normal.",
    },
  };
  return copy[filter] || { title: "Filter aktif", body: "Klik di luar area filter untuk kembali normal." };
}

function createBulkActionBar(visibleCandidates) {
  const selectedCandidates = getSelectedCandidates();
  const selectableVisibleCandidates = visibleCandidates.filter((candidate) => !["hired", "rejected"].includes(candidate.stage));
  const allVisibleSelected =
    selectableVisibleCandidates.length > 0 &&
    selectableVisibleCandidates.every((candidate) => selectedCandidateIds.has(candidate.id));

  const bar = document.createElement("div");
  bar.className = `bulk-action-bar ${selectedCandidates.length ? "active" : ""}`;
  bar.innerHTML = `
    <div class="bulk-copy">
      <strong>${selectedCandidates.length} kandidat dipilih</strong>
      <span>Pilih kandidat hasil scoring untuk psikotes, interview, skill test, atau briefing interviewer.</span>
    </div>
    <label class="select-visible">
      <input type="checkbox" ${allVisibleSelected ? "checked" : ""} ${selectableVisibleCandidates.length ? "" : "disabled"}>
      <span>Pilih kandidat tampil</span>
    </label>
    <div class="bulk-actions">
      <button type="button" class="mini-button psychotest-btn" ${selectedCandidates.length ? "" : "disabled"}>Psikotes</button>
      <button type="button" class="mini-button interview-btn" ${selectedCandidates.length ? "" : "disabled"}>Interview</button>
      <button type="button" class="mini-button skilltest-btn" ${selectedCandidates.length ? "" : "disabled"}>Skill Test</button>
      <button type="button" class="mini-button summary-btn" ${selectedCandidates.length ? "" : "disabled"}>Download Summary</button>
    </div>
  `;

  bar.querySelector(".select-visible input").addEventListener("change", (event) => {
    selectableVisibleCandidates.forEach((candidate) => {
      if (event.target.checked) selectedCandidateIds.add(candidate.id);
      else selectedCandidateIds.delete(candidate.id);
    });
    renderPipeline();
  });
  bar.querySelector(".psychotest-btn").addEventListener("click", () => moveSelectedCandidatesToStep("Psikotes"));
  bar.querySelector(".interview-btn").addEventListener("click", () => moveSelectedCandidatesToStep("Interview"));
  bar.querySelector(".skilltest-btn").addEventListener("click", () => moveSelectedCandidatesToStep("Skill Test"));
  bar.querySelector(".summary-btn").addEventListener("click", downloadInterviewSummary);

  return bar;
}

function createCandidateCard(candidate) {
  const card = document.createElement("article");
  card.className = `candidate-card candidate-list-row candidate-command-card stage-${candidate.stage} ${isFollowUpRiskCandidate(candidate) ? "followup-risk" : ""} ${selectedCandidateIds.has(candidate.id) ? "selected" : ""}`;
  card.dataset.candidateId = candidate.id;

  const scoreView = getCandidateScoreView(candidate);
  const scoreClass = scoreView.className;
  const isClosed = ["hired", "rejected"].includes(candidate.stage);
  const nextStage = getNextStageLabel(candidate);
  const parseConfidenceLabel = getParseConfidenceLabel(candidate.parseConfidence);
  const currentStageLabel = labelForStage(candidate.stage);

  card.innerHTML = `
    <label class="candidate-select" title="Pilih kandidat untuk bulk action">
      <input class="candidate-checkbox" type="checkbox" ${selectedCandidateIds.has(candidate.id) ? "checked" : ""} ${
        isClosed ? "disabled" : ""
      } aria-label="Pilih ${escapeHtml(candidate.name)}">
      <span></span>
    </label>

    <div class="candidate-profile-block">
      <div class="candidate-identity candidate-command-identity">
        <span class="stage-badge ${escapeHtml(candidate.stage)}">${escapeHtml(currentStageLabel)}</span>
        <div class="candidate-name-row">
          <h3>${escapeHtml(candidate.name)}</h3>
        </div>
        <p>${escapeHtml(candidate.role)}</p>
      </div>
      <div class="candidate-meta-list command-meta-list">
        <span>${escapeHtml(candidate.source)}</span>
        <span>${escapeHtml(String(candidate.experience ?? 0))} tahun pengalaman</span>
        <span>${escapeHtml(String(candidate.daysInStage ?? 0))} hari di stage</span>
        ${candidate.parserMode ? `<span class="parser-chip ${parseConfidenceLabel.className}">${escapeHtml(parseConfidenceLabel.label)}</span>` : ""}
        ${candidate.cacheHit ? `<span class="parser-chip high">Cache</span>` : ""}
      </div>
    </div>

    <div class="candidate-score-block command-score-block">
      <span class="score-pill ${scoreClass}">${escapeHtml(scoreView.label)}</span>
      <small>Current Stage: ${escapeHtml(currentStageLabel)}</small>
      <small>${escapeHtml(nextStage)}</small>
    </div>

    <div class="journey-stepper" aria-label="Hiring progress ${escapeHtml(candidate.name)}">
      ${renderCandidateStepper(candidate)}
    </div>

    <div class="card-actions list-actions command-card-actions">
      ${
        isClosed
          ? `<button class="mini-button advance-btn primary-action" type="button" disabled>Selesai</button>`
          : `<details class="candidate-step-menu">
              <summary class="mini-button advance-btn primary-action">Next ›</summary>
              <div class="step-menu-panel" role="menu" aria-label="Pilih proses berikutnya untuk ${escapeHtml(candidate.name)}">
                ${
                  candidate.stage === "interview"
                    ? `
                      <button type="button" data-candidate-step="interview">Interview lagi</button>
                      <button type="button" data-candidate-step="psychotest">Assessment</button>
                      <button type="button" data-candidate-step="offer">Offer</button>
                      <button type="button" data-candidate-step="hired">Hired</button>
                    `
                    : candidate.stage === "assessment"
                      ? `
                        <button type="button" data-candidate-step="skilltest">Assessment lagi</button>
                        <button type="button" data-candidate-step="offer">Offer</button>
                        <button type="button" data-candidate-step="hired">Hired</button>
                      `
                    : `
                      <button type="button" data-candidate-step="psychotest">Psikotes</button>
                      <button type="button" data-candidate-step="skilltest">Skill Test</button>
                      <button type="button" data-candidate-step="interview">Interview</button>
                      <button type="button" data-candidate-step="offer">Offer</button>
                      <button type="button" data-candidate-step="hired">Hired</button>
                    `
                }
              </div>
            </details>`
      }
      <button class="mini-button detail-btn secondary-soft-btn">Detail</button>
      <details class="candidate-secondary-menu">
        <summary class="mini-button secondary-action-btn grey-action-btn">Aksi</summary>
        <div class="secondary-menu-panel" role="menu" aria-label="Aksi kandidat ${escapeHtml(candidate.name)}">
          <button class="reread-btn" type="button" ${candidate.cvText ? "" : "disabled"}>${
            candidate.cvText ? "Baca ulang CV" : "Import ulang CV"
          }</button>
          <button class="reject-btn" type="button" ${isClosed ? "disabled" : ""}>Reject</button>
        </div>
      </details>
    </div>
  `;

  const rejectBtn = card.querySelector(".reject-btn");
  const checkbox = card.querySelector(".candidate-checkbox");

  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) selectedCandidateIds.add(candidate.id);
    else selectedCandidateIds.delete(candidate.id);
    renderPipeline();
  });
  card.querySelector(".reread-btn").addEventListener("click", (event) => {
    rereadCandidateFromCard(candidate.id, event.currentTarget);
  });
  card.querySelector(".detail-btn").addEventListener("click", () => showDetails(candidate.id));
  card.querySelector(".brief-symbol-btn")?.addEventListener("click", () => showInterviewBrief(candidate.id));
  rejectBtn.addEventListener("click", () => rejectCandidate(candidate.id));
  card.querySelectorAll("[data-candidate-step]").forEach((button) => {
    button.addEventListener("click", () => openStageDateDialog(candidate.id, button.dataset.candidateStep));
  });

  if (isClosed) {
    rejectBtn.disabled = true;
  }

  return card;
}

function renderCandidateStepper(candidate) {
  const actualJourney = normalizeStageJourney(candidate.stageJourney, candidate.stage);
  return visualPipelineStages
    .map((stage, index) => {
      const wasVisited = actualJourney.includes(stage.id);
      const isHiredComplete = candidate.stage === "hired" && stage.id === "hired";
      const stateClass = isHiredComplete ? "done hired-complete" : stage.id === candidate.stage ? "current" : wasVisited ? "done" : "upcoming";
      const marker = stateClass.includes("done") ? "✓" : "";
      const briefTrigger =
        actualJourney.includes("interview") && stage.id === "interview"
          ? `<button type="button" class="brief-symbol-btn" aria-label="Buka Interview Brief">⌕</button>`
          : "";
      return `
        <span class="journey-step ${stateClass}">
          <span class="journey-marker">${marker}</span>
          <span class="journey-label">${escapeHtml(stage.label)}</span>
          ${renderStageDateLine(candidate, stage.id)}
          ${briefTrigger}
        </span>
      `;
    })
    .join("");
}

function renderStageDateLine(candidate, stageId) {
  const dates = normalizeStageDates(candidate.stageDates)[stageId] || [];
  if (!dates.length) return "";
  const display = formatCompactStageDates(dates);
  return `<span class="journey-date-line" title="${escapeHtml(dates.map(formatLongStageDate).join(", "))}">${escapeHtml(display)}</span>`;
}

function formatCompactStageDates(dates = []) {
  const cleanDates = [...new Set(dates.filter(Boolean))].sort();
  if (!cleanDates.length) return "";
  if (cleanDates.length === 1) return formatShortStageDate(cleanDates[0]);
  if (cleanDates.length === 2) return cleanDates.map(formatShortStageDate).join(" · ");
  return `${formatShortStageDate(cleanDates[0])} · +${cleanDates.length - 1}`;
}

function formatShortStageDate(dateValue) {
  const date = parseDateOnly(dateValue);
  if (!date) return "";
  return new Intl.DateTimeFormat("id-ID", { day: "2-digit", month: "short" })
    .format(date)
    .replace(".", "");
}

function formatLongStageDate(dateValue) {
  const date = parseDateOnly(dateValue);
  if (!date) return "";
  return new Intl.DateTimeFormat("id-ID", { day: "2-digit", month: "long", year: "numeric" }).format(date);
}

function parseDateOnly(dateValue) {
  if (!dateValue) return null;
  const [year, month, day] = String(dateValue).slice(0, 10).split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function todayDateInputValue() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function visualStageIndex(stageId) {
  if (stageId === "rejected") return 0;
  const index = visualPipelineStages.findIndex((stage) => stage.id === stageId);
  if (index >= 0) return index;
  return 0;
}

function openStageDateDialog(candidateId, process) {
  const candidate = state.candidates.find((item) => item.id === candidateId);
  if (!candidate || !elements.stageDateDialog || !elements.stageDateInput) return;
  const targetStage = processToStage(process, candidate.stage);
  const label = processToLabel(process);
  pendingStageSchedule = { candidateId, process, targetStage };
  elements.stageDateTitle.textContent = `Tanggal ${label}`;
  elements.stageDateCopy.textContent =
    ["interview", "assessment"].includes(targetStage)
      ? `${label} bisa dilakukan beberapa kali. Tanggal akan tampil compact, contoh: 22 Mei · +2.`
      : `Tanggal ${label} akan tampil kecil di bawah bulatan journey.`;
  elements.stageDateInput.value = todayDateInputValue();
  elements.stageDateDialog.showModal();
}

function closeStageDateDialog() {
  pendingStageSchedule = null;
  closeDialogElement(elements.stageDateDialog);
}

function confirmStageDateSchedule(event) {
  event.preventDefault();
  if (!pendingStageSchedule || !elements.stageDateInput?.value) return;
  const schedule = { ...pendingStageSchedule, date: elements.stageDateInput.value };
  closeStageDateDialog();
  applyCandidateProcess(schedule.candidateId, schedule.process, schedule.date);
}

function processToStage(process, currentStage = "new") {
  if (process === "interview") return "interview";
  if (["psychotest", "skilltest"].includes(process)) return "assessment";
  if (process === "offer") return "offer";
  if (process === "hired") return "hired";
  return currentStage === "new" ? "screening" : currentStage;
}

function processToLabel(process) {
  const labels = {
    psychotest: "Assessment",
    skilltest: "Assessment",
    interview: "Interview",
    offer: "Offer",
    hired: "Hired",
  };
  return labels[process] || "Next Step";
}

function showInterviewBrief(candidateId) {
  const candidate = state.candidates.find((item) => item.id === candidateId) ?? state.candidates.find((item) => item.name === "Rafi Hidayat");
  if (!candidate || !elements.interviewBriefDialog || !elements.interviewBriefContent) return;

  const candidateInitials = getInitials(candidate.name);
  const screeningDate = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());
  const profile = demoCandidateProfiles[candidate.name] ?? {};
  const education = candidate.education || profile.education || "S1 Psikologi";
  elements.interviewBriefContent.innerHTML = `
    <aside class="brief-sidebar" aria-label="Learnova navigation">
      <div class="brief-brand">
        <span class="brief-logo">L</span>
        <div>
          <strong>Learnova</strong>
          <small>Recruitment Automation</small>
        </div>
      </div>
      <nav class="brief-nav" aria-label="Interview module navigation">
        ${["Dashboard", "Kandidat", "Posisi", "Pipeline", "Interview", "Assessment", "Offer", "Reports", "Settings"]
          .map((item) => `<a class="${item === "Kandidat" ? "active" : ""}" href="#">${escapeHtml(item)}</a>`)
          .join("")}
      </nav>
      <div class="brief-admin">
        <span>AR</span>
        <div>
          <strong>Admin Recruiter</strong>
          <small>Recruitment Team</small>
        </div>
      </div>
    </aside>

    <main class="brief-main">
      <header class="brief-header">
        <div>
          <p class="eyebrow">INTERVIEW</p>
          <h2>AI Interview Briefing Sheet</h2>
          <p>Ringkasan screening dan panduan interview kandidat.</p>
        </div>
        <div class="brief-header-actions">
          <button type="button" class="button button-secondary export-interview-pdf-btn">Export PDF</button>
          <button type="button" class="button button-secondary edit-interview-summary-btn">Edit Summary</button>
          <button type="button" class="icon-button close-interview-brief-btn" aria-label="Tutup interview brief">×</button>
        </div>
      </header>

      <section class="brief-candidate-card">
        <div class="brief-avatar">${escapeHtml(candidateInitials)}</div>
        <div class="brief-candidate-copy">
          <span class="stage-badge screening">Screening Completed</span>
          <h3>${escapeHtml(candidate.name)}</h3>
          <p>${escapeHtml(candidate.role)}</p>
          <div class="brief-mini-meta">
            <span>ID: CAN-250522-0178</span>
            <span>Sumber: ${escapeHtml(candidate.source || "Referral")}</span>
            <span>Tanggal Screening: ${escapeHtml(screeningDate)}</span>
          </div>
        </div>
        <button type="button" class="button button-secondary">Lihat CV</button>
      </section>

      <section class="brief-info-grid" aria-label="Candidate compact information">
        ${renderBriefInfoCard("Pengalaman", `${candidate.experience || 6} Tahun`)}
        ${renderBriefInfoCard("Pendidikan", education.includes("S1") ? "S1 Psikologi" : education)}
        ${renderBriefInfoCard("Sumber", candidate.source || "Referral")}
      </section>

      <section class="brief-card ai-summary-card">
        <h3>AI Screening Summary</h3>
        <p class="brief-summary-text">
          Kandidat memiliki pengalaman yang cukup relevan dalam end-to-end recruitment, terutama untuk posisi staff hingga supervisor.
          Kandidat terbiasa menggunakan job portal, LinkedIn, dan referral channel. Secara awal, kandidat terlihat sesuai untuk kebutuhan
          Talent Acquisition Partner, namun perlu pendalaman pada kemampuan stakeholder management, recruitment data tracking, dan
          pengalaman menangani hiring volume tinggi.
        </p>
      </section>

      <section class="brief-card">
        <h3>Role Fit Assessment</h3>
        <div class="brief-assessment-table">
          ${renderFitRow("Recruitment Experience", "High", 88, "Berpengalaman dalam sourcing, screening, dan interview coordination")}
          ${renderFitRow("Industry Relevance", "Medium", 62, "Pernah FMCG & Retail, belum terlalu kuat di 3PL")}
          ${renderFitRow("Stakeholder Management", "Medium", 58, "Perlu digali pengalaman menghadapi user demanding")}
          ${renderFitRow("Data & Reporting", "Medium", 55, "Perlu konfirmasi penggunaan dashboard/reporting recruitment")}
          ${renderFitRow("Culture Fit", "High", 84, "Komunikatif dan terlihat adaptif")}
        </div>
      </section>

      <div class="brief-two-column">
        <section class="brief-card">
          <h3>Key Strengths</h3>
          <div class="brief-list positive">
            ${renderBriefListItem("End-to-end recruitment", "Menangani proses dari sourcing sampai offering")}
            ${renderBriefListItem("Candidate communication", "Terbiasa follow-up kandidat dan menjaga candidate experience")}
            ${renderBriefListItem("Multi-channel sourcing", "Menggunakan JobStreet, LinkedIn, referral, dan database internal")}
            ${renderBriefListItem("Adaptability", "Pernah menangani beberapa industri berbeda")}
          </div>
        </section>

        <section class="brief-card">
          <h3>Potential Concerns / Red Flags</h3>
          <div class="brief-list warning">
            ${renderBriefListItem("Pengalaman 3PL belum kuat", "Gali pemahaman terhadap hiring operasional warehouse")}
            ${renderBriefListItem("Data recruitment belum jelas", "Tanyakan pengalaman membuat recruitment dashboard")}
            ${renderBriefListItem("Volume hiring belum terkonfirmasi", "Gali jumlah posisi/kandidat yang pernah ditangani per bulan")}
            ${renderBriefListItem("Stakeholder pressure", "Gali pengalaman menghadapi user yang urgent dan berubah-ubah")}
          </div>
        </section>
      </div>

      <section class="brief-card">
        <h3>Interview Focus Area</h3>
        <div class="brief-chip-row">
          ${["Technical Recruitment Skill", "Hiring Volume Handling", "Stakeholder Management", "Data Orientation", "Problem Solving", "Culture Fit"]
            .map((chip) => `<span>${escapeHtml(chip)}</span>`)
            .join("")}
        </div>
      </section>

      <section class="brief-card">
        <h3>Suggested Interview Questions</h3>
        <div class="brief-question-table">
          ${renderQuestionRow("Recruitment Process", "Ceritakan proses end-to-end recruitment yang biasa Anda jalankan.")}
          ${renderQuestionRow("Volume Hiring", "Berapa banyak posisi yang biasa Anda handle dalam satu bulan?")}
          ${renderQuestionRow("Stakeholder Management", "Bagaimana Anda menghadapi user yang meminta kandidat cepat tetapi requirement berubah-ubah?")}
          ${renderQuestionRow("Data & Reporting", "Recruitment metrics apa saja yang biasa Anda monitor?")}
          ${renderQuestionRow("Problem Solving", "Apa bottleneck recruitment paling sulit yang pernah Anda tangani dan bagaimana solusinya?")}
          ${renderQuestionRow("Culture Fit", "Lingkungan kerja seperti apa yang membuat Anda paling produktif?")}
        </div>
      </section>
    </main>

    <aside class="brief-right-panel">
      <section class="brief-card brief-sticky-card">
        <h3>Interview Brief</h3>
        <p class="brief-muted">Gunakan ringkasan ini sebagai panduan sebelum melakukan interview agar lebih terarah dan fokus pada area yang paling penting.</p>
      </section>

      <section class="brief-card">
        <h3>Interviewer Notes</h3>
        ${renderRatingNote("Communication")}
        ${renderRatingNote("Technical Fit")}
        ${renderRatingNote("Culture Fit")}
        ${renderRatingNote("Concern to Validate")}
        ${renderRatingNote("Final Impression")}
      </section>

      <section class="brief-card recommendation-card">
        <h3>Initial Recommendation</h3>
        <label>
          Recommendation
          <select>
            <option>Proceed to User Interview</option>
            <option>Hold for Comparison</option>
            <option>Reject</option>
          </select>
        </label>
        <label>
          Reason
          <textarea>Candidate has relevant TA experience, good communication, and sufficient exposure to multi-channel sourcing. Further validation is needed on 3PL hiring, recruitment analytics, and stakeholder pressure handling.</textarea>
        </label>
        <div class="brief-submit-actions">
          <button type="button" class="button button-primary submit-interview-result-btn">Submit Interview Result</button>
        </div>
      </section>
    </aside>
  `;

  elements.interviewBriefContent.querySelector(".close-interview-brief-btn")?.addEventListener("click", () => {
    closeDialogElement(elements.interviewBriefDialog);
  });
  elements.interviewBriefContent.querySelector(".export-interview-pdf-btn")?.addEventListener("click", exportInterviewBriefPdf);
  elements.interviewBriefContent.querySelector(".edit-interview-summary-btn")?.addEventListener("click", enableInterviewSummaryEdit);
  elements.interviewBriefContent.querySelector(".submit-interview-result-btn")?.addEventListener("click", () => submitInterviewResult(candidate.id));
  if (!elements.interviewBriefDialog.open) {
    elements.interviewBriefDialog.showModal();
  }
}

function renderBriefInfoCard(label, value) {
  return `
    <article class="brief-info-card">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </article>
  `;
}

function renderFitRow(area, level, score, notes) {
  const levelClass = level.toLowerCase();
  return `
    <div class="brief-fit-row">
      <strong>${escapeHtml(area)}</strong>
      <span class="fit-level ${levelClass}">${escapeHtml(level)}</span>
      <div class="fit-score-bar" aria-label="Score ${score}">
        <span style="width: ${score}%"></span>
      </div>
      <p>${escapeHtml(notes)}</p>
    </div>
  `;
}

function renderBriefListItem(title, body) {
  return `
    <div class="brief-list-item">
      <span class="brief-line-icon" aria-hidden="true"></span>
      <p><strong>${escapeHtml(title)}</strong> — ${escapeHtml(body)}</p>
    </div>
  `;
}

function renderQuestionRow(area, question) {
  return `
    <div class="brief-question-row">
      <strong>${escapeHtml(area)}</strong>
      <p>${escapeHtml(question)}</p>
    </div>
  `;
}

function renderRatingNote(label) {
  return `
    <label class="rating-note">
      <span>${escapeHtml(label)}</span>
      <textarea placeholder="Catatan ${escapeHtml(label.toLowerCase())}"></textarea>
    </label>
  `;
}

function exportInterviewBriefPdf() {
  const root = elements.interviewBriefContent;
  if (!root) return;

  const candidateName = root.querySelector(".brief-candidate-copy h3")?.textContent?.trim() || "Candidate";
  const candidateRole = root.querySelector(".brief-candidate-copy p")?.textContent?.trim() || "Role";
  const summary = root.querySelector(".brief-summary-text")?.textContent?.trim() || "-";
  const recommendation = root.querySelector(".recommendation-card select")?.value || "Proceed to User Interview";
  const reason = root.querySelector(".recommendation-card textarea")?.value?.trim() || "-";
  const infoCards = [...root.querySelectorAll(".brief-info-card")].map((card) => ({
    label: card.querySelector("span")?.textContent?.trim() || "",
    value: card.querySelector("strong")?.textContent?.trim() || "",
  }));
  const fitRows = [...root.querySelectorAll(".brief-fit-row")].map((row) => ({
    area: row.querySelector("strong")?.textContent?.trim() || "",
    level: row.querySelector(".fit-level")?.textContent?.trim() || "",
    notes: row.querySelector("p")?.textContent?.trim() || "",
  }));
  const strengths = [...root.querySelectorAll(".brief-list.positive .brief-list-item p")].map((item) => item.textContent.trim());
  const concerns = [...root.querySelectorAll(".brief-list.warning .brief-list-item p")].map((item) => item.textContent.trim());
  const questions = [...root.querySelectorAll(".brief-question-row")].map((row) => ({
    area: row.querySelector("strong")?.textContent?.trim() || "",
    question: row.querySelector("p")?.textContent?.trim() || "",
  }));
  const notes = [...root.querySelectorAll(".rating-note")].map((field) => ({
    label: field.querySelector("span")?.textContent?.trim() || "",
    value: field.querySelector("textarea")?.value?.trim() || "-",
  }));

  const printWindow = window.open("", "_blank", "width=920,height=1100");
  if (!printWindow) {
    window.print();
    return;
  }

  const today = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());

  printWindow.document.write(`
    <!doctype html>
    <html lang="id">
      <head>
        <meta charset="utf-8">
        <title>Interview Brief - ${escapeHtml(candidateName)}</title>
        <style>
          @page { size: A4; margin: 14mm; }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            color: #1d1d1f;
            background: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", "Segoe UI", Arial, sans-serif;
            font-size: 10.5px;
            line-height: 1.42;
          }
          h1, h2, h3, p { margin: 0; }
          .sheet { display: grid; gap: 10px; }
          .header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 18px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e5e7eb;
          }
          .eyebrow { color: #0a84ff; font-size: 8px; letter-spacing: .16em; text-transform: uppercase; }
          h1 { margin-top: 3px; font-size: 22px; letter-spacing: -0.045em; font-weight: 650; }
          .subtitle { margin-top: 4px; color: #6e6e73; font-size: 10px; }
          .pill {
            display: inline-flex;
            align-items: center;
            min-height: 22px;
            padding: 0 8px;
            border-radius: 999px;
            color: #128a3c;
            background: rgba(52,199,89,.12);
            font-weight: 600;
            white-space: nowrap;
          }
          .candidate {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            padding: 10px;
            border: 1px solid #e5e7eb;
            border-radius: 14px;
            background: #fbfbfd;
          }
          .candidate h2 { font-size: 16px; letter-spacing: -.03em; font-weight: 650; }
          .candidate p { color: #6e6e73; }
          .meta {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 6px;
          }
          .meta div, .card {
            padding: 9px;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            background: #fff;
          }
          .meta span, .label { display: block; color: #6e6e73; font-size: 8.5px; letter-spacing: .05em; }
          .meta strong { display: block; margin-top: 2px; font-size: 11px; }
          .grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
          .card h3 { margin-bottom: 6px; font-size: 12px; font-weight: 650; }
          .card p, li { color: #3a3a3c; }
          ul { margin: 0; padding-left: 15px; }
          li { margin: 0 0 3px; }
          table { width: 100%; border-collapse: collapse; overflow: hidden; border-radius: 10px; font-size: 9.5px; }
          th, td { padding: 6px 7px; border-bottom: 1px solid #e5e7eb; text-align: left; vertical-align: top; }
          th { color: #6e6e73; background: #f5f7fa; font-size: 8.5px; letter-spacing: .05em; }
          tr:last-child td { border-bottom: 0; }
          .level-high { color: #128a3c; font-weight: 650; }
          .level-medium { color: #a05a00; font-weight: 650; }
          .recommendation {
            border-color: rgba(10,132,255,.22);
            background: linear-gradient(135deg, rgba(10,132,255,.06), #fff);
          }
          .footer { color: #8a8a8e; font-size: 8.5px; text-align: right; }
          .break-avoid { break-inside: avoid; page-break-inside: avoid; }
        </style>
      </head>
      <body>
        <main class="sheet">
          <section class="header">
            <div>
              <p class="eyebrow">Interview Briefing Sheet</p>
              <h1>AI Interview Brief</h1>
              <p class="subtitle">Compact PDF untuk interviewer · ${escapeHtml(today)}</p>
            </div>
            <span class="pill">${escapeHtml(recommendation)}</span>
          </section>

          <section class="candidate break-avoid">
            <div>
              <h2>${escapeHtml(candidateName)}</h2>
              <p>${escapeHtml(candidateRole)}</p>
            </div>
            <p class="subtitle">Screening Completed</p>
          </section>

          <section class="meta break-avoid">
            ${infoCards.map((item) => `<div><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></div>`).join("")}
          </section>

          <section class="card break-avoid">
            <h3>AI Screening Summary</h3>
            <p>${escapeHtml(summary)}</p>
          </section>

          <section class="card break-avoid">
            <h3>Role Fit Assessment</h3>
            <table>
              <thead><tr><th>Area</th><th>Fit</th><th>Notes</th></tr></thead>
              <tbody>
                ${fitRows
                  .map(
                    (row) => `
                      <tr>
                        <td>${escapeHtml(row.area)}</td>
                        <td class="${row.level.toLowerCase() === "high" ? "level-high" : "level-medium"}">${escapeHtml(row.level)}</td>
                        <td>${escapeHtml(row.notes)}</td>
                      </tr>
                    `,
                  )
                  .join("")}
              </tbody>
            </table>
          </section>

          <section class="grid-2">
            <div class="card break-avoid">
              <h3>Key Strengths</h3>
              <ul>${strengths.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
            <div class="card break-avoid">
              <h3>Potential Concerns</h3>
              <ul>${concerns.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
          </section>

          <section class="card">
            <h3>Suggested Interview Questions</h3>
            <table>
              <thead><tr><th>Area</th><th>Question</th></tr></thead>
              <tbody>
                ${questions.map((row) => `<tr><td>${escapeHtml(row.area)}</td><td>${escapeHtml(row.question)}</td></tr>`).join("")}
              </tbody>
            </table>
          </section>

          <section class="grid-2">
            <div class="card break-avoid">
              <h3>Interviewer Notes</h3>
              <ul>${notes.map((item) => `<li><strong>${escapeHtml(item.label)}:</strong> ${escapeHtml(item.value)}</li>`).join("")}</ul>
            </div>
            <div class="card recommendation break-avoid">
              <h3>Initial Recommendation</h3>
              <p><strong>${escapeHtml(recommendation)}</strong></p>
              <p>${escapeHtml(reason)}</p>
            </div>
          </section>

          <p class="footer">Generated by Learnova Recruitment Automation</p>
        </main>
        <script>
          window.addEventListener("load", () => {
            window.focus();
            window.print();
          });
        <\/script>
      </body>
    </html>
  `);
  printWindow.document.close();
}

function enableInterviewSummaryEdit() {
  const summary = elements.interviewBriefContent?.querySelector(".brief-summary-text");
  const button = elements.interviewBriefContent?.querySelector(".edit-interview-summary-btn");
  if (!summary || !button) return;
  const isEditing = summary.getAttribute("contenteditable") === "true";
  if (isEditing) {
    summary.setAttribute("contenteditable", "false");
    summary.classList.remove("editing");
    button.textContent = "Edit Summary";
    return;
  }
  summary.setAttribute("contenteditable", "true");
  summary.classList.add("editing");
  button.textContent = "Done";
  summary.focus();
}

function submitInterviewResult(candidateId) {
  const candidate = state.candidates.find((item) => item.id === candidateId);
  if (!candidate || !elements.interviewBriefContent) return;

  const notes = {};
  elements.interviewBriefContent.querySelectorAll(".rating-note").forEach((field) => {
    const label = field.querySelector("span")?.textContent?.trim();
    const value = field.querySelector("textarea")?.value?.trim();
    if (label) notes[label] = value || "-";
  });

  const recommendation = elements.interviewBriefContent.querySelector(".recommendation-card select")?.value || "Proceed to User Interview";
  const reason = elements.interviewBriefContent.querySelector(".recommendation-card textarea")?.value?.trim() || "";
  const summary = elements.interviewBriefContent.querySelector(".brief-summary-text")?.textContent?.trim() || "";

  candidate.interviewResult = {
    submittedAt: new Date().toISOString(),
    interviewer: "Admin Recruiter",
    recommendation,
    reason,
    summary,
    notes,
  };
  candidate.nextStep = recommendation;
  candidate.history.push(`Interview result submitted: ${recommendation}`);
  pushActivity(`Hasil interview ${candidate.name} disubmit`);

  saveState();
  closeDialogElement(elements.interviewBriefDialog);
  render();
  showInterviewResult(candidate.id);
}

function showInterviewResult(candidateId) {
  const candidate = state.candidates.find((item) => item.id === candidateId);
  const result = candidate?.interviewResult;
  if (!candidate || !result || !elements.interviewResultDialog || !elements.interviewResultContent) return;

  const submittedDate = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(result.submittedAt));
  const mailto = buildInterviewMailto(candidate, result, submittedDate);

  elements.interviewResultTitle.textContent = `Hasil Interview — ${candidate.name}`;
  elements.interviewResultContent.innerHTML = `
    <section class="interview-result-hero">
      <div>
        <span class="stage-badge interview">Interview Submitted</span>
        <h3>${escapeHtml(candidate.name)}</h3>
        <p>${escapeHtml(candidate.role)} · ${escapeHtml(candidate.source || "Referral")}</p>
      </div>
      <a class="button button-primary send-email-btn" href="${mailto}">Send Email</a>
    </section>

    <section class="interview-result-card">
      <h3>Recommendation</h3>
      <strong>${escapeHtml(result.recommendation)}</strong>
      <p>${escapeHtml(result.reason || "Belum ada alasan tambahan.")}</p>
      <small>Submitted by ${escapeHtml(result.interviewer || "Interviewer")} · ${escapeHtml(submittedDate)}</small>
    </section>

    <section class="interview-result-card">
      <h3>AI Summary Used</h3>
      <p>${escapeHtml(result.summary || "Tidak ada summary.")}</p>
    </section>

    <section class="interview-result-card">
      <h3>Interviewer Notes</h3>
      <div class="interview-note-grid">
        ${Object.entries(result.notes || {})
          .map(
            ([label, value]) => `
              <article>
                <span>${escapeHtml(label)}</span>
                <p>${escapeHtml(value)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;

  if (!elements.interviewResultDialog.open) {
    elements.interviewResultDialog.showModal();
  }
}

function buildInterviewMailto(candidate, result, submittedDate) {
  const subject = `Hasil Interview - ${candidate.name} - ${candidate.role}`;
  const notes = Object.entries(result.notes || {})
    .map(([label, value]) => `${label}: ${value || "-"}`)
    .join("\n");
  const body = [
    `Hasil Interview Kandidat`,
    ``,
    `Nama: ${candidate.name}`,
    `Posisi: ${candidate.role}`,
    `Recommendation: ${result.recommendation}`,
    `Submitted: ${submittedDate}`,
    ``,
    `Reason:`,
    result.reason || "-",
    ``,
    `Interviewer Notes:`,
    notes || "-",
    ``,
    `AI Screening Summary:`,
    result.summary || "-",
  ].join("\n");

  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function getInitials(name = "") {
  return String(name)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "RH";
}

function applyCandidateProcess(candidateId, process, scheduledDate = "") {
  const candidate = state.candidates.find((item) => item.id === candidateId);
  if (!candidate || ["hired", "rejected"].includes(candidate.stage)) return;
  candidate.stageJourney = normalizeStageJourney(candidate.stageJourney, candidate.stage);
  candidate.stageDates = normalizeStageDates(candidate.stageDates);

  const processLabels = {
    psychotest: "Psikotes",
    skilltest: "Skill Test",
    interview: "Interview",
    offer: "Offer",
    hired: "Hired",
  };
  const label = processLabels[process] ?? "Review";

  if (process === "interview") {
    candidate.stage = "interview";
    candidate.daysInStage = 0;
    candidate.nextStep = "Interview";
  } else if (["psychotest", "skilltest"].includes(process)) {
    candidate.stage = "assessment";
    candidate.daysInStage = 0;
    candidate.nextStep = label;
  } else if (process === "offer") {
    candidate.stage = "offer";
    candidate.daysInStage = 0;
    candidate.nextStep = "Hired";
  } else if (process === "hired") {
    candidate.stage = "hired";
    candidate.daysInStage = 0;
    candidate.nextStep = "";
    selectedCandidateIds.delete(candidate.id);
  } else {
    candidate.nextStep = label;
    if (candidate.stage === "new") {
      candidate.stage = "screening";
      candidate.daysInStage = 0;
    }
  }

  candidate.history.push(`Recruiter memilih kandidat untuk ${label}`);
  candidate.stageJourney = normalizeStageJourney([...candidate.stageJourney, candidate.stage], candidate.stage);
  if (scheduledDate) {
    const targetStage = processToStage(process, candidate.stage);
    const stageDates = normalizeStageDates(candidate.stageDates);
    const existingDates = stageDates[targetStage] || [];
    stageDates[targetStage] = [...new Set([...existingDates, scheduledDate])].sort();
    candidate.stageDates = stageDates;
    candidate.history.push(`${label} dijadwalkan ${formatLongStageDate(scheduledDate)}`);
  }
  pushActivity(`${candidate.name} dipilih untuk ${label}`);

  saveState();
  render();
}

function getNextStageLabel(candidate) {
  if (candidate.stage === "hired") return "Selesai: hired";
  if (candidate.stage === "rejected") return "Selesai: rejected";
  if (candidate.nextStep) return `Next: ${candidate.nextStep}`;
  const nextStage = stages[stageOrder.indexOf(candidate.stage) + 1];
  return nextStage ? `Next: ${nextStage.label}` : "Final stage";
}

function syncSelectedCandidates() {
  const activeIds = new Set(
    state.candidates.filter((candidate) => !["hired", "rejected"].includes(candidate.stage)).map((candidate) => candidate.id),
  );
  selectedCandidateIds = new Set([...selectedCandidateIds].filter((id) => activeIds.has(id)));
}

function getSelectedCandidates() {
  return state.candidates.filter((candidate) => selectedCandidateIds.has(candidate.id));
}

function moveSelectedCandidatesToStep(stepLabel) {
  const selectedCandidates = getSelectedCandidates().filter((candidate) => !["hired", "rejected"].includes(candidate.stage));
  if (!selectedCandidates.length) return;

  selectedCandidates.forEach((candidate) => {
    candidate.stageJourney = normalizeStageJourney(candidate.stageJourney, candidate.stage);
    candidate.nextStep = stepLabel;
    if (stepLabel === "Interview") {
      candidate.stage = "interview";
      candidate.daysInStage = 0;
    } else if (candidate.stage === "new") {
      candidate.stage = "screening";
      candidate.daysInStage = 0;
    }
    candidate.stageJourney = normalizeStageJourney([...candidate.stageJourney, candidate.stage], candidate.stage);
    candidate.history.push(`Recruiter memilih kandidat untuk ${stepLabel}`);
  });

  pushActivity(`${selectedCandidates.length} kandidat dipilih untuk ${stepLabel}`);
  saveState();
  render();
}

function downloadInterviewSummary() {
  const selectedCandidates = getSelectedCandidates();
  if (!selectedCandidates.length) return;

  const headers = [
    "Nama",
    "Usia",
    "Pendidikan Terakhir",
    "Lama Pengalaman Kerja",
    "Perusahaan yang Pernah Dilalui",
    "Hasil Scoring",
    "Confidence Baca CV",
    "Posisi",
    "Stage",
    "Next Step",
    "Skill Utama",
    "Source",
  ];

  const rows = selectedCandidates.map((candidate) => [
    candidate.name,
    candidate.age ? `${candidate.age} tahun` : "-",
    candidate.education || "-",
    `${candidate.experience ?? 0} tahun`,
    formatCompanies(candidate.companies),
    `${candidate.score}/100 - ${getScoreVerdict(candidate.score)}`,
    candidate.parserMode ? `${Math.round((candidate.parseConfidence || 0) * 100)}% - ${candidate.parserMode}` : "-",
    candidate.role,
    labelForStage(candidate.stage),
    candidate.nextStep || "Interview review",
    (candidate.skills ?? []).join(", ") || "-",
    candidate.source,
  ]);

  const csv = [headers, ...rows].map((row) => row.map(escapeCsvCell).join(",")).join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const dateStamp = new Date().toISOString().slice(0, 10);
  link.href = url;
  link.download = `ringkasan-interview-${dateStamp}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  pushActivity(`Ringkasan interview ${selectedCandidates.length} kandidat diunduh`);
  saveState();
  renderActivities();
}

function escapeCsvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function formatCompanies(companies) {
  const normalizedCompanies = normalizeCompanies(companies);
  return normalizedCompanies.length ? normalizedCompanies.join(" | ") : "-";
}

function getScoreVerdict(score) {
  if (score >= 85) return "Prioritas interview";
  if (score >= 75) return "Layak review interviewer";
  return "Perlu validasi manual";
}

function getParseConfidenceLabel(confidence = 0) {
  if (!confidence) return { label: "Parser —", className: "unknown" };
  if (confidence >= 0.78) return { label: "CV high confidence", className: "high" };
  if (confidence >= 0.62) return { label: "CV medium confidence", className: "medium" };
  return { label: "CV low confidence", className: "low" };
}

function renderActivities() {
  elements.activityFeed.innerHTML = "";
  state.activities
    .slice(0, 6)
    .forEach((entry) => {
      const item = document.createElement("li");
      item.className = "activity-item";
      item.innerHTML = `
        <strong>${entry.message}</strong>
        <span>${entry.time}</span>
      `;
      elements.activityFeed.append(item);
    });
}

function renderTasks() {
  const tasks = buildTasks();
  elements.taskQueue.innerHTML = "";

  tasks.forEach((task) => {
    const card = document.createElement("article");
    card.className = `task-card ${task.level}`;
    card.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.body}</p>
    `;
    elements.taskQueue.append(card);
  });
}

function buildTasks() {
  const overdueScreening = state.candidates.filter(
    (candidate) => candidate.stage === "screening" && candidate.daysInStage >= 3,
  );
  const interviewCandidates = state.candidates.filter((candidate) => candidate.stage === "interview");
  const offerCandidates = state.candidates.filter((candidate) => candidate.stage === "offer");

  const tasks = [];

  if (overdueScreening.length) {
    tasks.push({
      level: "danger",
      title: `${overdueScreening.length} screening melewati SLA`,
      body: `${overdueScreening.map((candidate) => candidate.name).join(", ")} perlu keputusan hari ini.`,
    });
  }

  if (interviewCandidates.length) {
    tasks.push({
      level: "warning",
      title: `${interviewCandidates.length} interview perlu dijadwalkan`,
      body: "Sistem sudah menyiapkan reminder ke interviewer dan kandidat.",
    });
  }

  if (offerCandidates.length) {
    tasks.push({
      level: "",
      title: `${offerCandidates.length} offer siap diproses`,
      body: "Checklist compensation approval dan dokumen offer sudah dibuat otomatis.",
    });
  }

  if (!tasks.length) {
    tasks.push({
      level: "",
      title: "Tidak ada bottleneck besar",
      body: "Pipeline bergerak sehat. Fokuskan recruiter pada kandidat prioritas tinggi.",
    });
  }

  return tasks;
}

function addCandidate(candidate) {
  const blueprint = findActiveBlueprintByTitle(candidate.role);
  const job = findJobByTitle(candidate.role);
  const hasAiBlueprint = Boolean(blueprint);
  const scoringResult = hasAiBlueprint
    ? { score: null, breakdown: ["Menunggu AI Blueprint Fit Scoring."] }
    : calculateScore(candidate);
  const score = scoringResult.score;
  const autoScreenThreshold = blueprint?.scoring.autoScreenThreshold ?? job?.scoring.autoScreenThreshold ?? 85;
  const autoPromote = !hasAiBlueprint && score >= autoScreenThreshold;
  const newCandidate = normalizeCandidateProfile({
    id: `cand-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    ...candidate,
    score,
    scoreBreakdown: scoringResult.breakdown,
    stage: autoPromote ? "screening" : "new",
    stageJourney: autoPromote ? ["new", "screening"] : ["new"],
    daysInStage: 0,
    history: [
      candidate.fileName
        ? `CV dibaca otomatis dari ${candidate.fileName}`
        : `CV masuk dari ${candidate.source}`,
      hasAiBlueprint
        ? `AI scoring disiapkan berdasarkan jobdesc ${blueprint.positionName}`
        : `Auto-score ${score}/100 berdasarkan ${job ? `scoring khusus lowongan ${job.title}` : "skill dan pengalaman"}`,
      autoPromote
        ? "Kandidat diprioritaskan dan otomatis masuk screening"
        : "Kandidat masuk antrean review recruiter",
    ],
  });

  state.candidates.unshift(newCandidate);
  pushActivity(hasAiBlueprint ? `${newCandidate.name} masuk • menunggu AI scoring` : `${newCandidate.name} masuk • auto-score ${score}/100`);

  if (autoPromote) {
    pushActivity(`Task screening dibuat otomatis untuk ${newCandidate.name}`);
  } else {
    pushActivity(`Recruiter diminta review manual untuk ${newCandidate.name}`);
  }

  saveState();
  refreshRoleFilter(candidate.role);
  render();
  if (hasAiBlueprint) {
    scoreCandidateWithActiveBlueprint(newCandidate).then(() => {
      saveState();
      render();
    });
  }
}

function getSelectedCvFiles() {
  const folderFiles = [...(elements.folderInput.files ?? [])];
  const manualFiles = [...(elements.fileInput.files ?? [])];
  const allFiles = [...folderFiles, ...manualFiles];
  return allFiles.filter((file) => /\.(pdf|doc|docx)$/i.test(file.name));
}

function handleSelectedCvFiles() {
  const files = getSelectedCvFiles();
  if (!files.length) {
    elements.selectedFilesBox.textContent = "Belum ada CV PDF/DOC/DOCX dipilih.";
    return;
  }

  elements.selectedFilesBox.innerHTML = `
    <strong>${files.length} CV siap diimport</strong><br>
    ${files.map((file) => file.name).join(", ")}
  `;
}

async function importCvFiles(event) {
  event.preventDefault();
  if (importQueueRunning) {
    elements.importStatus.textContent = "Queue import CV masih berjalan. Tunggu sampai selesai atau biarkan berjalan di background.";
    return;
  }
  const files = getSelectedCvFiles();
  if (!files.length) {
    elements.importStatus.textContent = "Pilih minimal satu CV PDF, DOC, atau DOCX terlebih dahulu.";
    return;
  }

  const formData = new FormData(elements.importForm);
  const targetRole = formData.get("targetRole");
  const source = formData.get("source");

  elements.submitImportBtn.disabled = true;
  elements.importStatus.textContent = `Queue dibuat untuk ${files.length} CV. Kandidat akan muncul satu per satu di Candidate Smart List.`;
  pushActivity(`Background queue mulai membaca ${files.length} CV untuk ${targetRole}`);
  saveState();
  renderActivities();
  closeDialogElement(elements.importDialog);
  focusCandidatesForBlueprint(targetRole);

  try {
    importQueueRunning = true;
    const result = await parseCandidateFilesProgressively(files, targetRole, source);
    elements.importStatus.innerHTML = buildImportStatusMessage(result.imported, result.errors);

    pushActivity(`Queue selesai • ${result.imported} CV masuk${result.errors.length ? ` • ${result.errors.length} gagal` : ""}`);
    saveState();
    render();
    if (result.imported) {
      showImportSuccessDialog(result.imported, targetRole, source);
      startBlueprintScoringForRole(targetRole);
    }
  } catch (error) {
    elements.importStatus.textContent = `Import gagal: ${error.message}. Pastikan server demo berjalan dan file berformat PDF/DOC/DOCX.`;
    pushActivity(`Queue import gagal: ${error.message}`);
    saveState();
    renderActivities();
  } finally {
    importQueueRunning = false;
    elements.submitImportBtn.disabled = false;
  }
}

async function parseCandidateFilesProgressively(files, targetRole, source) {
  const queue = [...files];
  const errors = [];
  let imported = 0;
  let completed = 0;
  const total = queue.length;
  const concurrency = Math.min(3, total);

  const updateQueueActivity = (message) => {
    pushActivity(message);
    saveState();
    renderActivities();
  };

  async function worker() {
    while (queue.length) {
      const file = queue.shift();
      if (!file) return;
      try {
        const result = await parseCandidateFiles([file]);
        if (result.candidates?.length) {
          addParsedCandidates(result.candidates, targetRole, source);
          imported += result.candidates.length;
          updateQueueActivity(`${file.name} selesai dibaca • kandidat muncul di smart list`);
        }
        if (result.errors?.length) {
          errors.push(...result.errors);
          updateQueueActivity(`${file.name} gagal dibaca`);
        }
      } catch (error) {
        errors.push({ file: file.name, error: error.message || "Gagal membaca CV" });
        updateQueueActivity(`${file.name} gagal dibaca`);
      } finally {
        completed += 1;
        if (elements.importStatus) {
          elements.importStatus.innerHTML = `
            <strong>Background queue berjalan</strong><br>
            <small>${completed}/${total} CV selesai • ${imported} kandidat masuk${errors.length ? ` • ${errors.length} gagal` : ""}</small>
          `;
        }
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, worker));
  return { imported, errors };
}

async function parseCandidateFiles(files) {
  const endpoints = getParserEndpoints();
  let lastError = null;

  for (const endpoint of endpoints) {
    const payload = new FormData();
    files.forEach((file) => payload.append("files", file));

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        let message = "Gagal membaca CV";
        try {
          const errorPayload = await response.json();
          message = errorPayload.error ?? message;
        } catch {
          // keep default message
        }
        throw new Error(message);
      }

      return response.json();
    } catch (error) {
      lastError = error;
    }
  }

  throw new Error(
    lastError?.message === "Failed to fetch"
      ? "Browser tidak bisa menghubungi parser CV lokal. Buka aplikasi melalui http://127.0.0.1:8765 dan pastikan server demo berjalan."
      : lastError?.message ?? "Gagal membaca CV",
  );
}

async function hydrateAiParserStatus() {
  if (!elements.aiParserStatus) return;
  try {
    const response = await fetch(getAiStatusEndpoint());
    if (!response.ok) throw new Error("AI status unavailable");
    const status = await response.json();
    const statusClass = status.aiConfigured ? "active" : "inactive";
    const engineCopy = status.availableEngines?.length
      ? `Engine: ${status.availableEngines.join(", ")} • mode ${status.engineStrategy || "random"}`
      : "";
    const modelCopy = status.aiConfigured
      ? `${status.mode}${status.fallbackModels?.length ? ` → fallback ${status.fallbackModels.join(", ")}` : ""}${engineCopy ? ` • ${engineCopy}` : ""}`
      : status.message || `Parser lokal aktif tanpa API berbayar`;
    const sourceCopy = status.runtimeApiKeyConfigured ? " • API key dari aplikasi" : "";
    elements.aiParserStatus.className = `ai-parser-status ${statusClass}`;
    elements.aiParserStatus.innerHTML = `
      <strong>${status.aiConfigured ? "Parser Aktif" : "Parser Lokal"}</strong>
      <span>${modelCopy}${sourceCopy}</span>
    `;
  } catch {
    elements.aiParserStatus.className = "ai-parser-status inactive";
    elements.aiParserStatus.innerHTML = `
      <strong>Status AI tidak terbaca</strong>
      <span>Pastikan server lokal berjalan di port 8765.</span>
    `;
  }
}

function showImportSuccessDialog(imported, targetRole, source = "CV Import") {
  pendingImportTargetRole = targetRole;
  if (elements.importSuccessTitle) {
    elements.importSuccessTitle.textContent = `${imported} CV berhasil diupload`;
  }
  if (elements.importSuccessCopy) {
    elements.importSuccessCopy.textContent =
      `${imported} kandidat untuk ${targetRole} sudah dianalisis dari ${source} dan masuk Candidate Smart List.`;
  }

  if (elements.importSuccessDialog?.showModal) {
    if (!elements.importSuccessDialog.open) {
      try {
        elements.importSuccessDialog.showModal();
      } catch {
        closeDialogElement(elements.importDialog);
        elements.importSuccessDialog.showModal();
      }
    }
  } else {
    finalizeImportSuccess();
  }
}

function finalizeImportSuccess() {
  closeDialogElement(elements.importSuccessDialog);
  closeDialogElement(elements.importDialog);

  elements.folderInput.value = "";
  elements.fileInput.value = "";
  elements.selectedFilesBox.textContent = "Belum ada CV dipilih.";
  elements.importStatus.textContent = "";

  if (pendingImportTargetRole) {
    focusCandidatesForBlueprint(pendingImportTargetRole);
    pendingImportTargetRole = "";
  }
}

function closeDialogElement(dialog) {
  if (!dialog) return;
  if (dialog.open && typeof dialog.close === "function") {
    dialog.close();
    return;
  }
  dialog.removeAttribute?.("open");
}

function getAiStatusEndpoint() {
  const cacheBust = `t=${Date.now()}`;
  if (window.location.protocol === "file:") return `http://127.0.0.1:8765/api/ai-status?${cacheBust}`;
  return `${window.location.origin}/api/ai-status?${cacheBust}`;
}

function getRuntimeApiKeyEndpoint() {
  if (window.location.protocol === "file:") return "http://127.0.0.1:8765/api/runtime-ai-key";
  return `${window.location.origin}/api/runtime-ai-key`;
}

function openApiKeyDialog() {
  if (elements.apiKeyStatus) {
    elements.apiKeyStatus.textContent = "";
    elements.apiKeyStatus.className = "api-key-status";
  }
  elements.apiKeyDialog?.showModal();
}

async function saveRuntimeApiKey(event) {
  event.preventDefault();
  if (!elements.apiKeyForm) return;

  const formData = new FormData(elements.apiKeyForm);
  const apiKey = String(formData.get("apiKey") || "").trim();

  if (elements.apiKeyStatus) {
    elements.apiKeyStatus.className = "api-key-status loading";
    elements.apiKeyStatus.textContent = "Mengenali engine dan menyimpan API key...";
  }

  try {
    const response = await fetch(getRuntimeApiKeyEndpoint(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ apiKey }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload.error || "API key belum bisa disimpan.");

    const detectedProvider = payload.provider === "litellm" ? "Team Model" : payload.provider || "AI";
    if (elements.apiKeyStatus) {
      elements.apiKeyStatus.className = "api-key-status success";
      elements.apiKeyStatus.textContent = `API key aktif untuk ${String(detectedProvider).toUpperCase()} (${payload.maskedKey || "tersimpan"}).`;
    }
    pushActivity(`API key ${String(detectedProvider).toUpperCase()} aktif dari aplikasi. Parser siap dipakai tanpa edit backend.`);
    elements.apiKeyForm.reset();
    await hydrateAiParserStatus();
    window.setTimeout(() => closeDialogElement(elements.apiKeyDialog), 850);
  } catch (error) {
    if (elements.apiKeyStatus) {
      elements.apiKeyStatus.className = "api-key-status error";
      elements.apiKeyStatus.textContent = error.message || "Gagal menyimpan API key.";
    }
  }
}

function getParserEndpoints() {
  const localParser = "http://127.0.0.1:8765/api/parse-cvs";
  const currentOriginParser = `${window.location.origin}/api/parse-cvs`;

  if (window.location.protocol === "file:") {
    return [localParser];
  }

  if (
    ["127.0.0.1", "localhost"].includes(window.location.hostname) &&
    window.location.port &&
    window.location.port !== "8765"
  ) {
    return [currentOriginParser, localParser];
  }

  return ["/api/parse-cvs", localParser];
}

function getReanalysisEndpoints() {
  const localParser = "http://127.0.0.1:8765/api/reanalyze-cv";
  const currentOriginParser = `${window.location.origin}/api/reanalyze-cv`;

  if (window.location.protocol === "file:") {
    return [localParser];
  }

  if (
    ["127.0.0.1", "localhost"].includes(window.location.hostname) &&
    window.location.port &&
    window.location.port !== "8765"
  ) {
    return [currentOriginParser, localParser];
  }

  return ["/api/reanalyze-cv", localParser];
}

function getBlueprintGenerationEndpoints() {
  const localParser = "http://127.0.0.1:8765/api/generate-blueprint";
  const currentOriginParser = `${window.location.origin}/api/generate-blueprint`;
  if (window.location.protocol === "file:") return [localParser];
  if (
    ["127.0.0.1", "localhost"].includes(window.location.hostname) &&
    window.location.port &&
    window.location.port !== "8765"
  ) {
    return [currentOriginParser, localParser];
  }
  return ["/api/generate-blueprint", localParser];
}

function getFitScoringEndpoints() {
  const localParser = "http://127.0.0.1:8765/api/score-candidate-fit";
  const currentOriginParser = `${window.location.origin}/api/score-candidate-fit`;
  if (window.location.protocol === "file:") return [localParser];
  if (
    ["127.0.0.1", "localhost"].includes(window.location.hostname) &&
    window.location.port &&
    window.location.port !== "8765"
  ) {
    return [currentOriginParser, localParser];
  }
  return ["/api/score-candidate-fit", localParser];
}

async function requestJsonFromEndpoints(endpoints, payload, fallbackMessage) {
  let lastError = null;
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.error || fallbackMessage);
      return body;
    } catch (error) {
      lastError = error;
    }
  }
  throw new Error(
    lastError?.message === "Failed to fetch"
      ? "Browser tidak bisa menghubungi backend AI lokal. Pastikan server demo berjalan di port 8765."
      : lastError?.message ?? fallbackMessage,
  );
}

async function requestBlueprintGeneration(brief) {
  const body = await requestJsonFromEndpoints(getBlueprintGenerationEndpoints(), { brief }, "Gagal membuat Job Blueprint AI");
  return body.blueprint;
}

async function requestBlueprintFitScore(candidate, blueprint) {
  const body = await requestJsonFromEndpoints(
    getFitScoringEndpoints(),
    { candidate: serializeCandidateForScoring(candidate), blueprint: serializeBlueprintForScoring(blueprint) },
    "Gagal membuat Blueprint Fit Score",
  );
  return body.fitScore;
}

function serializeCandidateForScoring(candidate) {
  return {
    id: candidate.id,
    name: candidate.name,
    role: candidate.role,
    age: candidate.age,
    education: candidate.education,
    experience: candidate.experience,
    rawExperience: candidate.rawExperience,
    companies: candidate.companies,
    jobTitles: candidate.jobTitles,
    skills: candidate.skills,
    summary: candidate.summary,
    cvText: candidate.cvText,
  };
}

function serializeBlueprintForScoring(blueprint) {
  return {
    id: blueprint.id,
    positionName: blueprint.positionName,
    companyName: blueprint.companyName,
    businessType: blueprint.businessType,
    roleHolder: blueprint.roleHolder,
    positionLevel: blueprint.positionLevel,
    preferences: blueprint.preferences,
    mainResponsibilities: blueprint.mainResponsibilities,
    roleChallenges: blueprint.roleChallenges,
    jobRequirements: blueprint.jobRequirements,
  };
}

async function requestCandidateReanalysis(candidate) {
  const endpoints = getReanalysisEndpoints();
  let lastError = null;
  const payload = {
    fileName: candidate.fileName || `${candidate.name || "candidate"}.txt`,
    cvText: candidate.cvText || "",
    currentName: candidate.name,
    targetRole: candidate.role,
  };

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.error || "Baca ulang parser gagal");
      return body.candidate;
    } catch (error) {
      lastError = error;
    }
  }

  throw new Error(
    lastError?.message === "Failed to fetch"
      ? "Browser tidak bisa menghubungi parser lokal. Pastikan server demo berjalan di port 8765."
      : lastError?.message ?? "Baca ulang parser gagal",
  );
}

async function reanalyzeActiveCandidate() {
  const candidateId = elements.reanalyzeCandidateBtn?.dataset.candidateId;
  await reanalyzeCandidate(candidateId, {
    button: elements.reanalyzeCandidateBtn,
    refreshDetail: true,
    loadingLabel: "Menganalisis...",
  });
}

async function rereadCandidateFromCard(candidateId, button) {
  await reanalyzeCandidate(candidateId, {
    button,
    refreshDetail: false,
    loadingLabel: "Membaca...",
  });
}

async function reanalyzeCandidate(candidateId, options = {}) {
  const candidate = state.candidates.find((item) => item.id === candidateId);
  if (!candidate) return;

  if (!candidate.cvText || candidate.cvText.trim().length < 40) {
    candidate.parseWarnings = [
      ...new Set([
        "Teks CV tersimpan kosong/terlalu pendek. Upload ulang PDF/DOCX asli; jika PDF scan, ubah dulu ke PDF teks/OCR.",
        ...(candidate.parseWarnings || []),
      ]),
    ];
    saveState();
    render();
    if (options.refreshDetail) showDetails(candidate.id);
    return;
  }

  const button = options.button;
  const originalLabel = button?.textContent;
  if (button) {
    button.disabled = true;
    button.textContent = options.loadingLabel || "Menganalisis...";
  }

  try {
    const parsedCandidate = await requestCandidateReanalysis(candidate);
    applyReanalyzedCandidate(candidate, parsedCandidate);
    await scoreCandidateWithActiveBlueprint(candidate);
    pushActivity(`${candidate.name} dibaca ulang dengan AI parser`);
    saveState();
    render();
    if (options.refreshDetail) showDetails(candidate.id);
  } catch (error) {
    candidate.parseWarnings = [
      ...new Set([
        `Baca ulang parser gagal: ${error.message}`,
        ...(candidate.parseWarnings || []),
      ]),
    ];
    saveState();
    render();
    if (options.refreshDetail) showDetails(candidate.id);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = originalLabel;
    }
  }
}

async function scoreCandidateWithActiveBlueprint(candidate) {
  const blueprint = findActiveBlueprintByTitle(candidate.role);
  if (!blueprint) return;
  try {
    const fitScore = await requestBlueprintFitScore(candidate, blueprint);
    applyBlueprintFitScore(candidate, blueprint, fitScore);
  } catch (error) {
    markAiScoringFailed(candidate, blueprint, error);
  }
}

function maybeRunAiScoringForCandidate(candidate, options = {}) {
  const blueprint = findActiveBlueprintByTitle(candidate.role);
  if (!blueprint || scoringCandidateIds.has(candidate.id)) return;
  const hasFinalAiScore = candidate.aiFitScore?.blueprintId === blueprint.id && Number(candidate.aiFitScore?.confidence || 0) > 0;
  const needsScore = !hasFinalAiScore && (!Number(candidate.score) || candidate.aiFitScore?.status === "AI scoring gagal");
  if (!needsScore) return;

  scoringCandidateIds.add(candidate.id);
  candidate.scoreBreakdown = ["AI Blueprint Fit Scoring sedang berjalan."];
  saveState();
  render();
  scoreCandidateWithActiveBlueprint(candidate)
    .then(() => {
      saveState();
      render();
      if (options.refreshDetail && elements.detailDialog?.open) showDetails(candidate.id);
    })
    .finally(() => {
      scoringCandidateIds.delete(candidate.id);
    });
}

function getCandidateScoreView(candidate) {
  if (scoringCandidateIds.has(candidate.id)) {
    return { label: "AI scoring...", className: "mid" };
  }
  if (candidate.aiFitScore?.status === "AI scoring gagal") {
    return { label: "AI gagal", className: "low" };
  }
  if (!Number(candidate.score)) {
    return { label: "Belum discoring", className: "mid" };
  }
  const score = Number(candidate.score);
  return {
    label: `Score ${score}`,
    className: score >= 85 ? "good" : score >= 75 ? "mid" : "low",
  };
}

function applyReanalyzedCandidate(candidate, parsedCandidate = {}) {
  const preserved = {
    id: candidate.id,
    role: candidate.role,
    source: candidate.source,
    stage: candidate.stage,
    daysInStage: candidate.daysInStage,
    nextStep: candidate.nextStep,
    history: [...(candidate.history || [])],
  };

  const merged = normalizeCandidateProfile({
    ...candidate,
    name: parsedCandidate.name || candidate.name,
    email: parsedCandidate.email || candidate.email,
    phone: parsedCandidate.phone || candidate.phone,
    age: parsedCandidate.age || candidate.age,
    education: parsedCandidate.education || candidate.education,
    companies: parsedCandidate.companies?.length ? parsedCandidate.companies : candidate.companies,
    jobTitles: parsedCandidate.jobTitles?.length ? parsedCandidate.jobTitles : candidate.jobTitles,
    experience:
      parsedCandidate.experience !== undefined && parsedCandidate.experience !== "" && Number.isFinite(Number(parsedCandidate.experience))
        ? Number(parsedCandidate.experience)
        : candidate.experience,
    rawExperience: parsedCandidate.rawExperience || candidate.rawExperience,
    skills: parsedCandidate.skills?.length ? parsedCandidate.skills : candidate.skills,
    summary: parsedCandidate.summary || candidate.summary,
    cvText: parsedCandidate.cvText || candidate.cvText,
    fileName: parsedCandidate.fileName || candidate.fileName,
    parserMode: parsedCandidate.parserMode || candidate.parserMode,
    parseConfidence: parsedCandidate.parseConfidence ?? candidate.parseConfidence,
    fieldConfidence: parsedCandidate.fieldConfidence || candidate.fieldConfidence,
    parseEvidence: parsedCandidate.parseEvidence?.length ? parsedCandidate.parseEvidence : candidate.parseEvidence,
    parseWarnings: parsedCandidate.parseWarnings?.length ? parsedCandidate.parseWarnings : candidate.parseWarnings,
  });

  Object.assign(candidate, merged, preserved);
  candidate.aiFitScore = null;
  candidate.score = null;
  candidate.scoreBreakdown = ["Menunggu AI Blueprint Fit Scoring ulang."];
  candidate.history = [
    ...preserved.history,
    `Baca ulang AI dijalankan • ${candidate.parserMode || "AI parser"} • menunggu AI scoring`,
  ];
}

function buildImportStatusMessage(imported, errors = []) {
  const safeErrors = errors.map((error) => `${error.file}: ${error.error}`);
  const confidenceCopy = buildImportConfidenceCopy();
  if (!safeErrors.length) return `${imported} CV berhasil diimport.${confidenceCopy ? `<br><small>${confidenceCopy}</small>` : ""}`;
  return `
    <strong>${imported} CV berhasil diimport, ${safeErrors.length} gagal dibaca.</strong>
    ${confidenceCopy ? `<br><small>${confidenceCopy}</small>` : ""}
    <br>
    <small>${safeErrors.join("<br>")}</small>
  `;
}

function buildImportConfidenceCopy() {
  const recentParsed = state.candidates.slice(0, 8).filter((candidate) => candidate.parserMode);
  if (!recentParsed.length) return "";
  const lowConfidence = recentParsed.filter((candidate) => candidate.parseConfidence && candidate.parseConfidence < 0.65).length;
  const hybridCount = recentParsed.filter((candidate) => /hybrid/i.test(candidate.parserMode)).length;
  const aiCount = recentParsed.filter((candidate) => /openai|gemini|ai|accurate/i.test(candidate.parserMode)).length;
  const cacheCount = recentParsed.filter((candidate) => candidate.cacheHit || /cache/i.test(candidate.parserMode)).length;
  const parserLabel = hybridCount ? "Hybrid Fast + Accurate aktif" : aiCount ? "Parser cerdas aktif" : "Parser lokal aktif";
  const cacheCopy = cacheCount ? ` ${cacheCount} CV memakai cache.` : "";
  return lowConfidence
    ? `${parserLabel}.${cacheCopy} ${lowConfidence} CV confidence rendah ditandai di detail kandidat.`
    : `${parserLabel}.${cacheCopy} Semua hasil import terbaru punya confidence memadai.`;
}

function addParsedCandidates(parsedCandidates, targetRole, source) {
  parsedCandidates.forEach((parsedCandidate) => {
    addCandidate({
      name: parsedCandidate.name,
      role: targetRole,
      source,
      experience: parsedCandidate.experience,
      skills: parsedCandidate.skills,
      email: parsedCandidate.email,
      phone: parsedCandidate.phone,
      fileName: parsedCandidate.fileName,
      summary: parsedCandidate.summary,
      cvText: parsedCandidate.cvText,
      age: parsedCandidate.age,
      education: parsedCandidate.education,
      companies: parsedCandidate.companies,
      jobTitles: parsedCandidate.jobTitles,
      rawExperience: parsedCandidate.rawExperience,
      parserMode: parsedCandidate.parserMode,
      parseConfidence: parsedCandidate.parseConfidence,
      fieldConfidence: parsedCandidate.fieldConfidence,
      parseEvidence: parsedCandidate.parseEvidence,
      parseWarnings: parsedCandidate.parseWarnings,
      cacheHit: parsedCandidate.cacheHit,
    });
  });
}

function calculateScore(candidate) {
  const blueprint = findActiveBlueprintByTitle(candidate.role);
  if (blueprint) return calculateBlueprintSpecificScore(candidate, blueprint);

  const job = findJobByTitle(candidate.role);
  if (job) return calculateJobSpecificScore(candidate, job);

  const weightedSkills = {
    analytics: 16,
    sql: 15,
    dashboard: 12,
    "stakeholder management": 10,
    sourcing: 14,
    interview: 12,
    "employer branding": 10,
    hris: 14,
    payroll: 12,
    administration: 10,
    excel: 8,
    "power bi": 12,
    "people data": 12,
    ats: 10,
    "candidate experience": 10,
  };

  const skillScore = candidate.skills.reduce((sum, skill) => sum + (weightedSkills[skill] ?? 6), 0);
  const experienceScore = Math.min(candidate.experience * 5, 25);
  const score = Math.min(60 + skillScore + experienceScore, 99);
  return {
    score,
    breakdown: [
      `Fallback scoring: skill ${skillScore} poin`,
      `Experience contribution: ${experienceScore} poin`,
    ],
  };
}

function calculateBlueprintSpecificScore(candidate, blueprint, options = {}) {
  if (!options.ignoreAiFit && candidate.aiFitScore?.blueprintId === blueprint.id) {
    return {
      score: candidate.aiFitScore.score,
      breakdown: candidate.scoreBreakdown?.length ? candidate.scoreBreakdown : candidate.aiFitScore.reasons,
      componentScores: candidate.aiFitScore.componentScores,
    };
  }
  const candidateSkills = (candidate.skills ?? []).map((skill) => skill.toLowerCase());
  const searchableText = [
    candidate.name,
    candidate.summary,
    candidate.cvText,
    candidate.education,
    formatCompanies(candidate.companies),
    candidateSkills.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  let responsibilityFit = 45;
  let challengeFit = 45;
  let requirementFit = 45;
  const breakdown = [`Blueprint inference fallback: ${blueprint.positionName}`];

  const experienceGap = (candidate.experience ?? 0) - blueprint.scoring.minExperience;
  if (experienceGap >= 0) {
    const expPoints = 18 + Math.min(experienceGap * 3, 22);
    responsibilityFit += expPoints;
    requirementFit += Math.round(expPoints * 0.8);
    breakdown.push(`Career seniority fit: memenuhi minimum ${blueprint.scoring.minExperience} tahun; pengalaman dipakai sebagai sinyal capability, bukan hanya keyword.`);
  } else {
    const penalty = Math.abs(experienceGap) * 8;
    responsibilityFit -= penalty;
    requirementFit -= penalty;
    breakdown.push(`Experience risk: kurang dari minimum ${blueprint.scoring.minExperience} tahun.`);
  }

  const levelSignals = [blueprint.positionLevel, blueprint.roleHolder, blueprint.businessType].join(" ").toLowerCase();
  const seniorRoleSignal = /(manager|head|lead|chief|gm|general manager|vp|director|kepala|managerial)/i.test(searchableText);
  const sameLevelSignal = seniorRoleSignal && /(manager|general manager|vice president|director)/i.test(levelSignals);
  if (sameLevelSignal) {
    responsibilityFit += 12;
    challengeFit += 10;
    breakdown.push("Level inference: riwayat jabatan menunjukkan scope managerial/leadership yang relevan.");
  }

  const blueprintThemes = normalizeTerms([
    ...blueprint.mainResponsibilities,
    ...blueprint.roleChallenges,
    ...blueprint.jobRequirements,
    blueprint.businessType,
    blueprint.roleHolder,
    blueprint.preferences,
  ]).filter((term) => term.length >= 4);
  const themeHits = blueprintThemes.filter((term) => searchableText.includes(term)).slice(0, 8);
  const themePoints = Math.min(themeHits.length * 4, 22);
  responsibilityFit += Math.round(themePoints * 0.5);
  challengeFit += Math.round(themePoints * 0.3);
  requirementFit += Math.round(themePoints * 0.4);
  if (themeHits.length) breakdown.push(`Direct evidence ditemukan: ${themeHits.join(", ")}.`);

  if ((candidate.companies ?? []).length >= 2 || (candidate.jobTitles ?? []).length >= 2) {
    challengeFit += 8;
    breakdown.push("Career breadth: beberapa perusahaan/jabatan memberi sinyal pernah menghadapi variasi konteks kerja.");
  }

  const preferenceNote = evaluatePreferenceFit(candidate, blueprint.preferences);
  requirementFit += preferenceNote.points;
  if (preferenceNote.message) breakdown.push(preferenceNote.message);

  const parsingAdjustment = applyParsingConfidenceAdjustment(candidate, breakdown);
  responsibilityFit += parsingAdjustment;
  challengeFit += parsingAdjustment;
  requirementFit += parsingAdjustment;

  responsibilityFit = Math.max(0, Math.min(Math.round(responsibilityFit), 99));
  challengeFit = Math.max(0, Math.min(Math.round(challengeFit), 99));
  requirementFit = Math.max(0, Math.min(Math.round(requirementFit), 99));
  const finalScore = Math.max(0, Math.min(Math.round(responsibilityFit * 0.4 + challengeFit * 0.3 + requirementFit * 0.3), 99));
  return {
    score: finalScore,
    breakdown,
    componentScores: { responsibilityFit, challengeFit, requirementFit },
  };
}

function calculateJobSpecificScore(candidate, job) {
  const candidateSkills = (candidate.skills ?? []).map((skill) => skill.toLowerCase());
  const searchableText = [
    candidate.name,
    candidate.summary,
    candidate.cvText,
    candidateSkills.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  let score = 45;
  const breakdown = [`Base score: 45`];

  const experienceGap = candidate.experience - job.scoring.minExperience;
  if (experienceGap >= 0) {
    const expPoints = 15 + Math.min(experienceGap * 2, 10);
    score += expPoints;
    breakdown.push(`Pengalaman memenuhi minimum: +${expPoints}`);
  } else {
    const penalty = Math.abs(experienceGap) * 8;
    score -= penalty;
    breakdown.push(`Pengalaman kurang dari minimum ${job.scoring.minExperience} tahun: -${penalty}`);
  }

  const matchedMustHave = job.scoring.mustHaveSkills.filter((skill) => matchesCandidateTerm(skill, candidateSkills, searchableText));
  const missingMustHave = job.scoring.mustHaveSkills.filter((skill) => !matchedMustHave.includes(skill));
  const mustHavePoints = matchedMustHave.length * 12;
  const missingPenalty = missingMustHave.length * 10;
  score += mustHavePoints - missingPenalty;
  breakdown.push(`Must-have cocok (${matchedMustHave.length}/${job.scoring.mustHaveSkills.length}): +${mustHavePoints}`);
  if (missingMustHave.length) breakdown.push(`Must-have belum terlihat: ${missingMustHave.join(", ")} (-${missingPenalty})`);

  const matchedNiceHave = job.scoring.niceHaveSkills.filter((skill) => matchesCandidateTerm(skill, candidateSkills, searchableText));
  const nicePoints = matchedNiceHave.length * 6;
  score += nicePoints;
  if (matchedNiceHave.length) breakdown.push(`Nice-to-have: ${matchedNiceHave.join(", ")} (+${nicePoints})`);

  const matchedKeywords = job.scoring.keywords.filter((keyword) => searchableText.includes(keyword));
  const keywordPoints = matchedKeywords.length * 3;
  score += keywordPoints;
  if (matchedKeywords.length) breakdown.push(`Keyword khusus: ${matchedKeywords.join(", ")} (+${keywordPoints})`);

  const matchedDisqualifiers = job.scoring.disqualifiers.filter((keyword) => searchableText.includes(keyword));
  const redFlagPenalty = matchedDisqualifiers.length * 25;
  score -= redFlagPenalty;
  if (matchedDisqualifiers.length) breakdown.push(`Red flag: ${matchedDisqualifiers.join(", ")} (-${redFlagPenalty})`);

  score += applyParsingConfidenceAdjustment(candidate, breakdown);

  return {
    score: Math.max(0, Math.min(Math.round(score), 99)),
    breakdown,
  };
}

function matchesCandidateTerm(term, candidateSkills, searchableText) {
  return candidateSkills.some((skill) => skill.includes(term) || term.includes(skill)) || searchableText.includes(term);
}

function applyParsingConfidenceAdjustment(candidate, breakdown) {
  if (!candidate.parserMode || !candidate.parseConfidence) return 0;
  if (candidate.parseConfidence >= 0.82) {
    breakdown.push(`CV parsing confidence tinggi: ${Math.round(candidate.parseConfidence * 100)}% (+2)`);
    return 2;
  }
  if (candidate.parseConfidence < 0.55) {
    breakdown.push(`CV parsing confidence rendah: ${Math.round(candidate.parseConfidence * 100)}% (-8, perlu validasi detail)`);
    return -8;
  }
  breakdown.push(`CV parsing confidence sedang: ${Math.round(candidate.parseConfidence * 100)}% (0)`);
  return 0;
}

function evaluatePreferenceFit(candidate, preferences = "") {
  const text = String(preferences).toLowerCase();
  let points = 0;
  const notes = [];

  const maxAgeMatch = text.match(/(?:usia|umur|age)\s*(?:max|maks|maksimal|<=?)\s*(\d{2})/);
  if (maxAgeMatch && candidate.age) {
    const maxAge = Number(maxAgeMatch[1]);
    if (candidate.age <= maxAge) {
      points += 3;
      notes.push(`preferensi usia terpenuhi (+3)`);
    } else {
      points -= 2;
      notes.push(`preferensi usia perlu review manual (-2, bukan auto-gugur)`);
    }
  }

  const candidateText = `${candidate.education ?? ""} ${formatCompanies(candidate.companies)} ${candidate.cvText ?? ""}`.toLowerCase();
  ["ptn", "industri sama", "industri yang sama", "hris", "retail", "distribusi", "top 10"].forEach((keyword) => {
    if (text.includes(keyword) && candidateText.includes(keyword.split(" ")[0])) {
      points += 2;
      notes.push(`preferensi ${keyword} terlihat (+2)`);
    }
  });

  return {
    points,
    message: notes.length ? `Preference fit: ${notes.join("; ")}` : "",
  };
}

function findActiveBlueprintByTitle(title) {
  const normalizedTitle = String(title).toLowerCase();
  return state.blueprints.find(
    (blueprint) => blueprint.status === "on" && blueprint.positionName.toLowerCase() === normalizedTitle,
  );
}

function findJobByTitle(title) {
  return state.jobs.find((job) => job.title.toLowerCase() === String(title).toLowerCase());
}

function advanceCandidate(candidateId) {
  const candidate = state.candidates.find((item) => item.id === candidateId);
  if (!candidate) return;
  candidate.stageJourney = normalizeStageJourney(candidate.stageJourney, candidate.stage);

  const currentIndex = stageOrder.indexOf(candidate.stage);
  const nextStage = stageOrder[Math.min(currentIndex + 1, stageOrder.length - 1)];
  candidate.stage = nextStage;
  candidate.stageJourney = normalizeStageJourney([...candidate.stageJourney, nextStage], nextStage);
  candidate.daysInStage = 0;
  candidate.nextStep = "";
  if (["hired", "rejected"].includes(nextStage)) selectedCandidateIds.delete(candidate.id);

  const automationMessage = automationForStage(candidate, nextStage);
  candidate.history.push(automationMessage);
  pushActivity(`${candidate.name} pindah ke ${labelForStage(nextStage)} • ${automationMessage}`);

  saveState();
  render();
}

function rejectCandidate(candidateId) {
  const candidate = state.candidates.find((item) => item.id === candidateId);
  if (!candidate || ["hired", "rejected"].includes(candidate.stage)) return;
  candidate.stageJourney = normalizeStageJourney(candidate.stageJourney, candidate.stage);

  candidate.stage = "rejected";
  candidate.daysInStage = 0;
  candidate.nextStep = "";
  selectedCandidateIds.delete(candidate.id);
  const automationMessage = "Email penolakan profesional dijadwalkan dan kandidat diarsipkan";
  candidate.history.push(automationMessage);
  pushActivity(`${candidate.name} dipindahkan ke Rejected • ${automationMessage}`);

  saveState();
  render();
}

function automationForStage(candidate, stage) {
  switch (stage) {
    case "screening":
      return "Task CV review dibuat dengan SLA 48 jam";
    case "interview":
      return "Template jadwal interview dan reminder interviewer dibuat";
    case "offer":
      return "Offer checklist dan approval compensation disiapkan";
    case "hired":
      return "Handover onboarding dikirim ke HR Ops dan IT";
    case "rejected":
      return "Email penolakan profesional dijadwalkan";
    default:
      return `Status kandidat diperbarui ke ${stage}`;
  }
}

function runDailyAutomation() {
  state.candidates.forEach((candidate) => {
    if (!["hired", "rejected"].includes(candidate.stage)) {
      candidate.daysInStage += 1;
    }
  });

  const overdue = state.candidates.filter(
    (candidate) => ["new", "screening", "interview"].includes(candidate.stage) && candidate.daysInStage >= 3,
  );

  pushActivity(
    overdue.length
      ? `Daily automation: ${overdue.length} reminder SLA dikirim ke recruiter/interviewer`
      : "Daily automation: tidak ada SLA breach baru",
  );

  saveState();
  render();
}

function resetDemo() {
  state = {
    candidates: structuredClone(seedCandidates).map(normalizeCandidateProfile),
    jobs: structuredClone(seedJobs),
    blueprints: structuredClone(seedBlueprints).map(normalizeBlueprint),
    activities: [
      activity("Automation engine aktif — semua kandidat baru akan di-score otomatis."),
      activity("Daily SLA scan siap dijalankan untuk interviewer dan recruiter."),
      activity("Pipeline demo dimuat ulang."),
    ],
  };
  localStorage.setItem(storageKey, JSON.stringify(state));
  hydrateRoleFilter();
  render();
}

function connectGoogleDrive() {
  const config = getDriveConfig();
  if (!hasDriveConfig(config)) {
    elements.driveDialog.showModal();
    return;
  }

  if (!driveTokenClient) {
    elements.importStatus.textContent = "Google Drive belum siap. Coba refresh halaman sesaat lagi.";
    return;
  }

  driveTokenClient.callback = (response) => {
    if (response.error) {
      elements.importStatus.textContent = "Koneksi Google Drive dibatalkan atau gagal.";
      return;
    }

    driveAccessToken = response.access_token;
    elements.driveConnectionCopy.textContent = "Google Drive terhubung. Pilih folder CV langsung dari cloud.";
    elements.connectDriveBtn.textContent = "Drive terhubung";
    elements.pickDriveFolderBtn.disabled = false;
    pushActivity("Google Drive terhubung untuk direct CV import");
    saveState();
    renderActivities();
  };

  driveTokenClient.requestAccessToken({ prompt: driveAccessToken ? "" : "consent" });
}

function openDriveFolderPicker() {
  const config = getDriveConfig();
  if (!driveAccessToken) {
    elements.importStatus.textContent = "Hubungkan Google Drive terlebih dahulu.";
    return;
  }

  if (!pickerApiReady) {
    elements.importStatus.textContent = "Google Picker belum siap. Coba lagi dalam beberapa detik.";
    return;
  }

  const folderView = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
    .setIncludeFolders(true)
    .setSelectFolderEnabled(true);

  const picker = new google.picker.PickerBuilder()
    .addView(folderView)
    .setOAuthToken(driveAccessToken)
    .setDeveloperKey(config.apiKey)
    .setAppId(config.appId)
    .setCallback(handleDrivePickerSelection)
    .build();

  picker.setVisible(true);
}

async function handleDrivePickerSelection(data) {
  if (data.action !== google.picker.Action.PICKED) return;

  const selectedFolder = data.docs?.[0];
  if (!selectedFolder?.id) {
    elements.importStatus.textContent = "Folder Drive tidak terbaca.";
    return;
  }

  const formData = new FormData(elements.importForm);
  const targetRole = formData.get("targetRole");
  const source = "Google Drive Cloud";

  elements.importStatus.textContent = `Membaca isi folder "${selectedFolder.name}" dari Google Drive...`;

  try {
    const driveFiles = await listDriveCvFiles(selectedFolder.id);
    if (!driveFiles.length) {
      elements.importStatus.textContent = "Tidak ada CV PDF/DOC/DOCX di folder tersebut.";
      return;
    }

    const files = await downloadDriveFiles(driveFiles);
    const result = await parseCandidateFiles(files);
    addParsedCandidates(result.candidates, targetRole, source);

    elements.importStatus.textContent =
      `${result.candidates.length} CV dari Google Drive berhasil diimport${result.errors.length ? `, ${result.errors.length} gagal dibaca` : ""}.`;
    pushActivity(`${result.candidates.length} CV diimport otomatis dari Google Drive Cloud`);
    saveState();
    render();
    startBlueprintScoringForRole(targetRole);
    if (result.candidates.length) {
      showImportSuccessDialog(result.candidates.length, targetRole, source);
    }
  } catch (error) {
    elements.importStatus.textContent = "Import dari Google Drive gagal. Periksa izin folder dan koneksi.";
  }
}

async function listDriveCvFiles(folderId) {
  const query = [
    `'${folderId}' in parents`,
    "trashed=false",
    `(${supportedDriveMimeTypes.map((type) => `mimeType='${type}'`).join(" or ")})`,
  ].join(" and ");

  const collectedFiles = [];
  let pageToken = "";

  do {
    const params = new URLSearchParams({
      q: query,
      fields: "nextPageToken,files(id,name,mimeType,capabilities/canDownload)",
      supportsAllDrives: "true",
      includeItemsFromAllDrives: "true",
      pageSize: "100",
    });

    if (pageToken) {
      params.set("pageToken", pageToken);
    }

    const response = await fetch(`https://www.googleapis.com/drive/v3/files?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${driveAccessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Drive file listing failed");
    }

    const result = await response.json();
    collectedFiles.push(...(result.files ?? []));
    pageToken = result.nextPageToken ?? "";
  } while (pageToken);

  return collectedFiles.filter((file) => file.capabilities?.canDownload !== false);
}

async function downloadDriveFiles(files) {
  return Promise.all(
    files.map(async (file) => {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&supportsAllDrives=true`,
        {
          headers: {
            Authorization: `Bearer ${driveAccessToken}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error(`Failed to download ${file.name}`);
      }

      const blob = await response.blob();
      return new File([blob], file.name, { type: file.mimeType });
    }),
  );
}

function showDetails(candidateId) {
  const candidate = state.candidates.find((item) => item.id === candidateId);
  if (!candidate) return;
  const activeBlueprint = findActiveBlueprintByTitle(candidate.role);
  maybeRunAiScoringForCandidate(candidate, { refreshDetail: true });
  const parseConfidenceLabel = getParseConfidenceLabel(candidate.parseConfidence);
  const scoreView = getCandidateScoreView(candidate);
  const scoreClass = scoreView.className;
  const profileFacts = [
    ["Source", candidate.source],
    ["Usia", candidate.age ? `${candidate.age} tahun` : "-"],
    ["Pendidikan", candidate.education || "-"],
    ["Pengalaman", candidate.rawExperience || `${candidate.experience ?? 0} tahun`],
    ["Stage", labelForStage(candidate.stage)],
    ["Next step", candidate.nextStep || getNextStageLabel(candidate).replace("Next: ", "")],
    ["Email", candidate.email || "-"],
    ["Phone", candidate.phone || "-"],
    ["CV", candidate.fileName || "-"],
  ];

  elements.detailName.textContent = candidate.name;
  if (elements.reanalyzeCandidateBtn) {
    const hasStoredCvText = Boolean(candidate.cvText && candidate.cvText.trim().length >= 40);
    elements.reanalyzeCandidateBtn.dataset.candidateId = candidate.id;
    elements.reanalyzeCandidateBtn.disabled = !hasStoredCvText;
    elements.reanalyzeCandidateBtn.textContent = hasStoredCvText ? "Baca ulang" : "Upload ulang CV";
    elements.reanalyzeCandidateBtn.title = hasStoredCvText
      ? "Analisis ulang kandidat dari teks CV yang tersimpan"
      : "Teks CV tersimpan terlalu pendek; import ulang CV asli untuk dibaca ulang";
  }
  elements.detailSummary.innerHTML = `
    <section class="candidate-detail-hero">
      <div>
        <span class="stage-badge ${escapeHtml(candidate.stage)}">${escapeHtml(labelForStage(candidate.stage))}</span>
        <h3>${escapeHtml(candidate.name)}</h3>
        <p>${escapeHtml(candidate.role)}</p>
        ${activeBlueprint ? `<small>Blueprint: ${escapeHtml(activeBlueprint.positionName)}${activeBlueprint.companyName ? ` · ${escapeHtml(activeBlueprint.companyName)}` : ""}</small>` : ""}
      </div>
      <div class="detail-score-stack">
        <span class="score-pill ${scoreClass}">${escapeHtml(scoreView.label)}</span>
        ${
          candidate.parserMode
            ? `<span class="parser-chip ${parseConfidenceLabel.className}">${escapeHtml(parseConfidenceLabel.label)}</span>
               <small>${escapeHtml(candidate.parserMode)} · ${Math.round((candidate.parseConfidence || 0) * 100)}%</small>`
            : ""
        }
      </div>
    </section>

    ${candidate.summary ? `<p class="detail-summary-copy">${escapeHtml(candidate.summary)}</p>` : ""}

    <section class="detail-card">
      <h4>Profil kandidat</h4>
      <div class="detail-kv-grid">
        ${renderDetailFacts(profileFacts)}
      </div>
    </section>

    <section class="detail-card">
      <h4>Riwayat kerja terbaca</h4>
      <div class="detail-two-column">
        <div>
          <span class="detail-label">Perusahaan</span>
          ${renderDetailList(candidate.companies)}
        </div>
        <div>
          <span class="detail-label">Jabatan</span>
          ${renderDetailList(candidate.jobTitles)}
        </div>
      </div>
    </section>

    ${candidate.scoreBreakdown ? renderScoreBreakdown(candidate.scoreBreakdown) : ""}
    ${renderBlueprintFitInsight(candidate)}
    ${renderParsingAudit(candidate)}
    ${renderCvTextPreview(candidate)}
  `;
  elements.detailTrail.innerHTML = candidate.history.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  elements.detailDialog.showModal();
}

function renderDetailFacts(items) {
  return items
    .map(
      ([label, value]) => `
        <div class="detail-fact">
          <span>${escapeHtml(label)}</span>
          <p>${escapeHtml(value ?? "-")}</p>
        </div>
      `,
    )
    .join("");
}

function renderDetailList(items = []) {
  const normalized = normalizeCompanies(items);
  if (!normalized.length) return `<p class="detail-muted">Belum terbaca jelas</p>`;
  return `<ul class="detail-clean-list">${normalized.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderScoreBreakdown(items = []) {
  return `
    <section class="detail-card">
      <h4>Alasan scoring</h4>
      <ul class="detail-clean-list scoring-list">
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderBlueprintFitInsight(candidate) {
  const fit = candidate.aiFitScore;
  if (!fit) return "";
  const componentScores = fit.componentScores ?? {};
  const inferences = Array.isArray(fit.inferences) ? fit.inferences : [];
  const comparisonMatrix = Array.isArray(fit.comparisonMatrix) ? fit.comparisonMatrix : [];
  return `
    <section class="detail-card">
      <h4>AI Jobdesc vs CV Reasoning</h4>
      ${fit.executiveSummary ? `<p class="detail-summary-copy">${escapeHtml(fit.executiveSummary)}</p>` : ""}
      <div class="fit-score-grid">
        <span><strong>${componentScores.responsibilityFit ?? "-"}</strong>Tanggung jawab</span>
        <span><strong>${componentScores.challengeFit ?? "-"}</strong>Tantangan</span>
        <span><strong>${componentScores.requirementFit ?? "-"}</strong>Persyaratan</span>
      </div>
      ${
        comparisonMatrix.length
          ? `<div class="ai-comparison-list">${comparisonMatrix
              .slice(0, 8)
              .map(
                (item) => `
                  <div class="ai-comparison-item">
                    <div class="ai-comparison-head">
                      <span>${escapeHtml(item.category || "Analisis")}</span>
                      <strong>${escapeHtml(String(item.score || "-"))}</strong>
                    </div>
                    <dl>
                      <dt>Jobdesc</dt>
                      <dd>${escapeHtml(item.jobNeed || "-")}</dd>
                      <dt>Bukti CV</dt>
                      <dd>${escapeHtml(item.cvEvidence || "Belum tertulis eksplisit di CV")}</dd>
                      <dt>Analisa AI</dt>
                      <dd>${escapeHtml(item.fitAnalysis || "-")}</dd>
                      <dt>Evidence</dt>
                      <dd>${escapeHtml(item.evidenceLevel || "Analisis AI")}${item.riskOrGap ? ` · Risk: ${escapeHtml(item.riskOrGap)}` : ""}</dd>
                    </dl>
                  </div>
                `,
              )
              .join("")}</div>`
          : ""
      }
      ${
        inferences.length
          ? `<div class="parse-audit-list">${inferences
              .slice(0, 6)
              .map(
                (item) => `
                  <div class="parse-audit-item">
                    <strong>${escapeHtml(item.capability)} • ${escapeHtml(item.evidenceLevel)}</strong>
                    <span>${escapeHtml(item.reason)} • ${Math.round((item.confidence || 0) * 100)}%</span>
                  </div>
                `,
              )
              .join("")}</div>`
          : ""
      }
      ${fit.interviewQuestions?.length ? `<h4>Pertanyaan validasi interview</h4>${renderDetailList(fit.interviewQuestions)}` : ""}
    </section>
  `;
}

function renderParsingAudit(candidate) {
  const evidence = candidate.parseEvidence ?? [];
  const warnings = candidate.parseWarnings ?? [];
  if (!evidence.length && !warnings.length) return "";

  const evidenceHtml = evidence.length
    ? `<div class="parse-audit-list">${evidence
        .slice(0, 8)
        .map(
          (item) => `
            <div class="parse-audit-item">
              <strong>${escapeHtml(item.field)}: ${escapeHtml(item.value)}</strong>
              <span>${escapeHtml(item.source)} • ${Math.round((item.confidence || 0) * 100)}%</span>
            </div>
          `,
        )
        .join("")}</div>`
    : "";

  const warningHtml = warnings.length
    ? `<div class="parse-warning-list">${warnings.map((warning) => `<span>${escapeHtml(warning)}</span>`).join("")}</div>`
    : "";

  return `<section class="detail-card"><h4>CV parsing audit</h4>${evidenceHtml}${warningHtml}</section>`;
}

function renderCvTextPreview(candidate) {
  const cvText = candidate.cvText || "";
  const visibleText = cvText.trim();
  const previewLimit = 2600;
  const preview = visibleText.slice(0, previewLimit);
  const truncated = visibleText.length > previewLimit;

  return `
    <section class="detail-card cv-text-card">
      <div class="detail-card-heading-row">
        <h4>Teks CV yang benar-benar terbaca</h4>
        <span>${visibleText.length.toLocaleString("id-ID")} karakter</span>
      </div>
      <p class="detail-muted">
        Ini adalah teks yang tersimpan dari extractor lokal. Kalau bagian ini kosong/acak, sumber parsing memang bermasalah; untuk PDF scan/gambar, lakukan OCR atau upload file berbasis teks.
      </p>
      ${
        visibleText
          ? `<pre class="cv-text-preview">${escapeHtml(preview)}${truncated ? "\n\n… teks dipotong untuk tampilan detail" : ""}</pre>`
          : `<div class="empty-cv-text">Tidak ada teks lokal yang terbaca. Upload ulang PDF/DOCX berbasis teks, atau lakukan OCR untuk PDF scan.</div>`
      }
    </section>
  `;
}

function pushActivity(message) {
  state.activities.unshift(activity(message));
}

function activity(message) {
  return {
    message,
    time: new Intl.DateTimeFormat("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "short",
    }).format(new Date()),
  };
}

function labelForStage(stageId) {
  return stageLabelOverrides[stageId] ?? stages.find((stage) => stage.id === stageId)?.label ?? stageId;
}

function refreshRoleFilter(role) {
  hydrateRoleFilter();
}









