const data = [
  {
    phase: "Project Handover",
    subheading: "1A - Contract Signing & Team Assignment",
    items: [
      {
        text: "Contract signature sheet filled, signed by Origination Lead, Admin & Finance",
        p: "important",
        d: "48 hrs"
      },
      {
        text: "Head of Finance obtains CEO/Director signature",
        p: "critical",
        d: "Kickoff"
      },
      {
        text: "Documents shared with Admin, Finance, PMG, and Directors",
        p: "important",
        d: "48 hrs"
      },
      {
        text: "Admin retains one contract copy; sends one to client",
        p: "important",
        d: "48 hrs"
      },
      {
        text: "Finance allocates unique project code",
        p: "important",
        d: "48 hrs"
      },
      {
        text: "Admin retains one contract copy; sends one to client",
        p: "important",
        d: "48 hrs"
      },
      {
        text: "Finance allocates unique project code",
        p: "routine",
        d: "Week 1"
      }
    ]
  },
  {
    phase: "Inception - Internal",
    subheading: "Internal kickoff and systems setup",
    items: [
      {
        text: "Conduct internal kickoff meeting",
        p: "critical",
        d: "14 days"
      },
      {
        text: "Present project plan and timelines",
        p: "critical",
        d: "Kickoff"
      },
      {
        text: "Communicate procurement and HR needs",
        p: "important",
        d: "Kickoff"
      },
      {
        text: "Create Teams group",
        p: "important",
        d: "Post"
      },
      {
        text: "Set up channels and planner",
        p: "routine",
        d: "Post"
      },
      {
        text: "Create SharePoint structure",
        p: "routine",
        d: "Post"
      },
      {
        text: "Define naming protocol",
        p: "routine",
        d: "Post"
      },
      {
        text: "Enter deliverables into system",
        p: "important",
        d: "Post"
      },
      {
        text: "Set milestone alerts",
        p: "important",
        d: "Post"
      },
      {
        text: "Enable MS Loop if needed",
        p: "routine",
        d: "NA"
      }
    ]
  },
  {
    phase: "Inception - Internal",
    subheading: "Internal review and readiness checks",
    items: [
      {
        text: "Conduct internal kickoff meeting",
        p: "critical",
        d: "14 days"
      },
      {
        text: "Present project plan and timelines",
        p: "critical",
        d: "Kickoff"
      },
      {
        text: "Communicate procurement and HR needs",
        p: "important",
        d: "Kickoff"
      },
      {
        text: "Create Teams group",
        p: "important",
        d: "Post"
      },
      {
        text: "Set up channels and planner",
        p: "routine",
        d: "Post"
      },
      {
        text: "Create SharePoint structure",
        p: "routine",
        d: "Post"
      },
      {
        text: "Define naming protocol",
        p: "routine",
        d: "Post"
      },
      {
        text: "Enter deliverables into system",
        p: "important",
        d: "Post"
      },
      {
        text: "Set milestone alerts",
        p: "important",
        d: "Post"
      },
      {
        text: "Enable MS Loop if needed",
        p: "routine",
        d: "NA"
      }
    ]
  },
  {
    phase: "Inception - Client",
    subheading: "Client kickoff and communication alignment",
    items: [
      {
        text: "Schedule client inception meeting",
        p: "critical",
        d: "7 days"
      },
      {
        text: "Prepare presentation",
        p: "important",
        d: "Meeting"
      },
      {
        text: "Share inception report",
        p: "important",
        d: "Post"
      },
      {
        text: "Share internal summary",
        p: "routine",
        d: "Post"
      },
      {
        text: "Define communication protocol",
        p: "critical",
        d: "Ongoing"
      },
      {
        text: "Create WhatsApp group if needed",
        p: "routine",
        d: "NA"
      },
      {
        text: "Plan launch workshop if required",
        p: "routine",
        d: "NA"
      }
    ]
  },
  {
    phase: "Consultant Management",
    subheading: "Contracts, billing and oversight",
    items: [
      {
        text: "Prepare SOW and initiate contract",
        p: "critical",
        d: "14 days"
      },
      {
        text: "Share billing templates",
        p: "important",
        d: "Week 1"
      },
      {
        text: "Approve timesheets",
        p: "important",
        d: "Monthly"
      },
      {
        text: "Notify contract changes",
        p: "critical",
        d: "NA"
      }
    ]
  },
  {
    phase: "Project Implementation",
    subheading: "Execution, monitoring and milestone control",
    items: [
      {
        text: "Attend client meetings",
        p: "critical",
        d: "Ongoing"
      },
      {
        text: "Define team responsibilities",
        p: "critical",
        d: "Ongoing"
      },
      {
        text: "Monitor workload",
        p: "important",
        d: "Ongoing"
      },
      {
        text: "Ensure shared file usage",
        p: "important",
        d: "Ongoing"
      },
      {
        text: "Use approved templates",
        p: "routine",
        d: "Start"
      },
      {
        text: "Plan and execute fieldwork",
        p: "critical",
        d: "Pre-field"
      },
      {
        text: "Ensure deliverable reviews",
        p: "critical",
        d: "Milestone"
      },
      {
        text: "Track financial milestones",
        p: "important",
        d: "Ongoing"
      },
      {
        text: "Escalate risks",
        p: "critical",
        d: "As needed"
      },
      {
        text: "Trigger invoices",
        p: "important",
        d: "Milestone"
      }
    ]
  },
  {
    phase: "Project Completion",
    subheading: "Closeout, feedback and knowledge capture",
    items: [
      {
        text: "Inform all teams of completion",
        p: "important",
        d: "Close"
      },
      {
        text: "Archive project files",
        p: "important",
        d: "Close"
      },
      {
        text: "Conduct performance review",
        p: "important",
        d: "Close"
      },
      {
        text: "Update project write-up",
        p: "routine",
        d: "Close"
      },
      {
        text: "Collect client feedback",
        p: "critical",
        d: "2 weeks"
      },
      {
        text: "Obtain completion certificate",
        p: "critical",
        d: "2 weeks"
      },
      {
        text: "Plan dissemination",
        p: "routine",
        d: "2 weeks"
      }
    ]
  }
];

const storageKey = "iora_full";
let projectDetails = {
  name: "",
  code: ""
};
let state = {};

try {
  const savedData = JSON.parse(localStorage.getItem(storageKey)) || {};

  if (savedData && typeof savedData === "object" && !Array.isArray(savedData)) {
    if ("items" in savedData || "projectName" in savedData || "projectCode" in savedData) {
      projectDetails.name = savedData.projectName || "";
      projectDetails.code = savedData.projectCode || "";
      state = savedData.items || {};
    } else {
      state = savedData;
    }
  }
} catch {
  state = {};
}

function save() {
  localStorage.setItem(storageKey, JSON.stringify({
    projectName: projectDetails.name,
    projectCode: projectDetails.code,
    items: state
  }));
}

function syncProjectDetails() {
  projectDetails.name = document.getElementById("projectName").value;
  projectDetails.code = document.getElementById("projectCode").value;
  save();
}

function loadProjectDetails() {
  document.getElementById("projectName").value = projectDetails.name;
  document.getElementById("projectCode").value = projectDetails.code;
}

function toggle(i, j) {
  const k = i + "_" + j;
  state[k] = state[k] || {};
  state[k].done = !state[k].done;
  save();
  render();
}

function risk(i, j) {
  const k = i + "_" + j;
  state[k] = state[k] || {};
  state[k].risk = !state[k].risk;
  save();
  render();
}

function clearChecked() {
  Object.keys(state).forEach((key) => {
    if (!state[key]?.done) {
      return;
    }

    state[key].done = false;

    if (!state[key].risk) {
      delete state[key];
    }
  });

  save();
  render();
}

function render() {
  const s = document.getElementById("search").value.toLowerCase();
  const pf = document.getElementById("priorityFilter").value;
  const sf = document.getElementById("statusFilter").value;

  let done = 0;
  let total = 0;

  const html = data.map((phase, i) => {
    const items = phase.items
      .map((item, j) => ({ item, j }))
      .filter(({ item, j }) => {
        const k = i + "_" + j;
        const st = state[k] || {};
        if (s && !item.text.toLowerCase().includes(s)) return false;
        if (pf && item.p !== pf) return false;
        if (sf === "done" && !st.done) return false;
        if (sf === "pending" && st.done) return false;
        if (sf === "risk" && !st.risk) return false;
        return true;
      })
      .map(({ item, j }) => {
        const k = i + "_" + j;
        const st = state[k] || {};
        total++;
        if (st.done) done++;

        return `<div class="item">
<div class="checkbox ${st.done ? "checked" : ""}" onclick="toggle(${i},${j})"></div>
<div class="text ${st.done ? "done" : ""}">
${item.text}<span class="tag ${item.p}">${item.p}</span>
</div>
<div class="deadline">${item.d}</div>
<div class="risk ${st.risk ? "active" : ""}" onclick="risk(${i},${j})">&#9888;</div>
</div>`;
      })
      .join("");

    if (!items) return "";

    const subtitle = phase.subheading
      ? `<div class="phase-subtitle">${phase.subheading}</div>`
      : "";

    return `<div class="phase">
<div class="phase-header">
<div class="phase-title">${phase.phase}</div>
${subtitle}
</div>
${items}
</div>`;
  }).join("");

  document.getElementById("app").innerHTML = html;

  const pct = total ? Math.round((done / total) * 100) : 0;
  document.getElementById("fill").style.width = pct + "%";
 document.getElementById("ptext").innerText = `${done}/${total} (${pct}%)`;
}

loadProjectDetails();

document.getElementById("projectName").oninput = syncProjectDetails;
document.getElementById("projectCode").oninput = syncProjectDetails;
document.getElementById("search").oninput = render;
document.getElementById("priorityFilter").onchange = render;
document.getElementById("statusFilter").onchange = render;
document.getElementById("clearCheckedBtn").onclick = clearChecked;

render();
