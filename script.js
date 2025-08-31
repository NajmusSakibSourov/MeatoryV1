/* -------- Data (interlinked across sections) -------- */
const suppliers = ["Fresh Farms", "Global Meats", "Pasture Prime", "AgroFarm Ltd", "Quality Foods"];
const facilities = ["Cold A", "Cold B", "Cold C", "Cold D"];

const data = {
  meatProduct: {
    title: "Meat Product Data",
    headers: ["Animal Type","Cut Type","Processing Date","Storage Requirements","Shelf Life","Packaging","Supplier","Actions"],
    rows: [
      ["Beef","Ribeye","2025-08-01","Chilled 0–4°C","21 days","Vacuum","Global Meats"],
      ["Poultry","Breast","2025-08-03","Frozen -18°C","6 months","Vacuum","Fresh Farms"],
      ["Pork","Belly","2025-08-04","Chilled 2–4°C","15 days","Wrap","AgroFarm Ltd"],
      ["Beef","Sirloin","2025-08-05","Chilled 0–4°C","21 days","Wrap","Quality Foods"],
      ["Lamb","Leg","2025-08-06","Frozen -20°C","9 months","Vacuum","Pasture Prime"],
      ["Poultry","Wings","2025-08-06","Frozen -18°C","6 months","Wrap","Fresh Farms"],
      ["Pork","Loin","2025-08-07","Chilled 2–4°C","20 days","Vacuum","AgroFarm Ltd"],
      ["Beef","Brisket","2025-08-07","Chilled 0–4°C","18 days","Vacuum","Global Meats"],
      ["Lamb","Shoulder","2025-08-08","Frozen -20°C","8 months","Wrap","Pasture Prime"],
      ["Poultry","Thigh","2025-08-08","Frozen -18°C","6 months","Vacuum","Quality Foods"]
    ]
  },

  livestock: {
    title: "Incoming Livestock / Meat Monitoring",
    headers: ["Batch ID","Animal Type","Quantity","Processing Date","Unit","Quality","Actions"],
    rows: [
      ["B100","Beef",120,"2025-08-01","Unit 1","Passed"],
      ["B101","Poultry",320,"2025-08-02","Unit 2","Passed"],
      ["B102","Pork",180,"2025-08-03","Unit 3","Passed"],
      ["B103","Beef",210,"2025-08-04","Unit 1","Passed"],
      ["B104","Lamb",90,"2025-08-05","Unit 2","Pending"],
      ["B105","Poultry",280,"2025-08-06","Unit 1","Passed"],
      ["B106","Pork",160,"2025-08-06","Unit 3","Passed"],
      ["B107","Beef",230,"2025-08-07","Unit 1","Passed"],
      ["B108","Lamb",100,"2025-08-07","Unit 2","Passed"],
      ["B109","Poultry",350,"2025-08-08","Unit 2","Passed"]
    ]
  },

  stockLevels: {
    title: "Stock Levels",
    headers: ["Storage Facility","Animal Type","Product Cut","Stock (kg)","Reorder Level","Status","Actions"],
    rows: [
      ["Cold A","Beef","Ribeye",420,200,"Sufficient"],
      ["Cold B","Poultry","Breast",140,200,"Low"],
      ["Cold C","Pork","Belly",310,200,"Sufficient"],
      ["Cold A","Beef","Sirloin",190,220,"Low"],
      ["Cold D","Lamb","Leg",260,180,"Sufficient"],
      ["Cold B","Poultry","Wings",180,200,"Low"],
      ["Cold C","Pork","Loin",290,180,"Sufficient"],
      ["Cold A","Beef","Brisket",240,200,"Sufficient"],
      ["Cold D","Lamb","Shoulder",200,180,"Sufficient"],
      ["Cold B","Poultry","Thigh",160,200,"Low"]
    ]
  },

  expiration: {
    title: "Expiration & Batch Tracking",
    headers: ["Batch No","Animal Type","Cut","Expiration Date","Shelf Life (days)","Status","Actions"],
    rows: [
      ["B100","Beef","Ribeye","2025-08-22",21,"Valid"],
      ["B101","Poultry","Breast","2025-12-01",180,"Valid"],
      ["B102","Pork","Belly","2025-08-18",15,"Expired"],
      ["B103","Beef","Sirloin","2025-08-25",21,"Valid"],
      ["B104","Lamb","Leg","2026-03-01",270,"Valid"],
      ["B105","Poultry","Wings","2026-01-01",180,"Valid"],
      ["B106","Pork","Loin","2025-08-26",20,"Valid"],
      ["B107","Beef","Brisket","2025-08-27",18,"Valid"],
      ["B108","Lamb","Shoulder","2026-02-10",240,"Valid"],
      ["B109","Poultry","Thigh","2025-12-28",180,"Valid"]
    ]
  },

  storage: {
    title: "Storage Condition Monitoring",
    headers: ["Facility","Temperature (°C)","Humidity (%)","Last Updated","Status","Actions"],
    rows: [
      ["Cold A",-18,60,"2025-08-18 14:00","Normal"],
      ["Cold B",-15,67,"2025-08-18 14:05","Warning"],
      ["Cold C",-20,58,"2025-08-18 14:10","Normal"],
      ["Cold D",-19,62,"2025-08-18 14:12","Normal"],
      ["Cold A",  2,72,"2025-08-18 15:15","Warning"],
      ["Cold B",-16,65,"2025-08-18 15:18","Normal"],
      ["Cold C",-21,59,"2025-08-18 15:21","Normal"],
      ["Cold D",-17,70,"2025-08-18 15:24","Warning"],
      ["Cold A",-18,63,"2025-08-18 15:27","Normal"],
      ["Cold B",-14,75,"2025-08-18 15:29","Alert"]
    ]
  },

  yield: {
    title: "Yield Analysis",
    headers: ["Batch","Animal","Input (kg)","Output (kg)","Trimmings (kg)","Bones (kg)","Offal (kg)","Yield %","Actions"],
    rows: [
      ["B100","Beef",500,380,50,40,30,"76%"],
      ["B101","Poultry",320,256,28,20,16,"80%"],
      ["B102","Pork",180,135,20,13,12,"75%"],
      ["B103","Beef",210,160,20,18,12,"76%"],
      ["B104","Lamb",90,68,8,7,5,"76%"],
      ["B105","Poultry",280,224,20,18,14,"80%"],
      ["B106","Pork",160,120,20,10,10,"75%"],
      ["B107","Beef",230,175,22,20,13,"76%"],
      ["B108","Lamb",100,75,9,8,6,"75%"],
      ["B109","Poultry",350,280,25,22,18,"80%"]
    ]
  },

  compliance: {
    title: "Compliance & Recall",
    headers: ["Compliance ID","Regulation","Batch","Inspection Date","Result","Recall Status","Actions"],
    rules: [
      "All batches must comply with FDA/USDA hygiene standards.",
      "Monthly internal inspections with full traceability logs.",
      "Immediate recall on any failed safety check."
    ],
    rows: [
      ["C001","FDA Hygiene","B100","2025-08-10","Passed","Not Recalled"],
      ["C002","EU Safety","B101","2025-08-12","Failed","Recalled"],
      ["C003","USDA Traceability","B102","2025-08-14","Passed","Not Recalled"],
      ["C004","ISO 22000","B103","2025-08-16","Passed","Not Recalled"],
      ["C005","HACCP","B104","2025-08-17","Passed","Not Recalled"],
      ["C006","FDA Hygiene","B105","2025-08-18","Passed","Not Recalled"],
      ["C007","EU Safety","B106","2025-08-18","Passed","Not Recalled"],
      ["C008","USDA Traceability","B107","2025-08-19","Passed","Not Recalled"],
      ["C009","ISO 22000","B108","2025-08-20","Passed","Not Recalled"],
      ["C010","HACCP","B109","2025-08-20","Passed","Not Recalled"]
    ]
  }
};

/* -------- Rendering engine (forms & tables auto-built from headers) -------- */
const charts = {}; // store Chart.js instances

function showSection(id){
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  const el = document.getElementById(id);
  el.classList.add("active");
  renderSection(id);
}

function renderSection(id){
  const section = document.getElementById(id);
  const cfg = data[id];

  // Build the section card
  let html = `<div class="card"><h2>${cfg.title}</h2>`;

  // Optional rules (Compliance)
  if (cfg.rules){
    html += `<div class="card" style="padding:12px;margin-top:8px;">
      <strong>📋 Compliance Rules</strong>
      <ul style="margin:8px 0 0 18px">
        ${cfg.rules.map(r=>`<li>${r}</li>`).join("")}
      </ul>
    </div>`;
  }

  // Form (inputs from headers except 'Actions')
  html += `<form class="form" id="${id}-form" data-edit-index="-1">`;
  cfg.headers.forEach(h=>{
    if(h !== "Actions"){
      html += `<input placeholder="${h}" aria-label="${h}" />`;
    }
  });
  html += `<button type="submit" id="${id}-save-btn">Save</button></form>`;

// Table
html += `<div class="table-wrap"><table id="${id}-table"><thead><tr>`;
cfg.headers.forEach(h => { html += `<th>${h}</th>`; });
html += `</tr></thead><tbody>`;
cfg.rows.forEach((row, idx) => {
  html += rowHTML(id, row, idx);
});
html += `</tbody></table></div></div>`;

// After injecting HTML into DOM, add validation
setTimeout(() => {
  const saveBtn = document.getElementById(`${id}-save-btn`);
  saveBtn.addEventListener("click", function (e) {
    const form = saveBtn.closest("form");
    const inputs = form.querySelectorAll("input, select, textarea");
    let allFilled = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        allFilled = false;
      }
    });

    if (!allFilled) {
      e.preventDefault(); // stop form submit
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill in all fields before saving!",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK"
      });
    }
  });
}, 0);


  // Chart
  html += `<canvas id="${id}-chart" class="chart"></canvas>`;

  section.innerHTML = html;

  // Hook up form submit
  wireForm(id);

  // Build chart
  buildChart(id);
}

function rowHTML(id,row,idx){
  const cells = row.map(v=>`<td>${v}</td>`).join("");
  return `<tr data-index="${idx}">
    ${cells}
    <td class="action-btn">
      <button class="btn btn-edit" onclick="onEdit('${id}', ${idx})">Edit</button>
      <button class="btn btn-del" onclick="onDelete('${id}', ${idx})">Delete</button>
    </td>
  </tr>`;
}

function wireForm(id){
  const form = document.getElementById(`${id}-form`);
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const cfg = data[id];
    const inputs = [...form.querySelectorAll("input")];
    const values = inputs.map(i => i.value.trim() || "-");

    const editIndex = parseInt(form.dataset.editIndex,10);
    if (editIndex >= 0){
      // Update
      cfg.rows[editIndex] = values;
      form.dataset.editIndex = -1;
    } else {
      // Add
      cfg.rows.push(values);
    }
    // Reset inputs
    inputs.forEach(i=>i.value="");
    // Re-render table & chart only (keep section)
    rerenderTable(id);
    updateChart(id);
  });
}

function rerenderTable(id){
  const tbody = document.querySelector(`#${id}-table tbody`);
  const cfg = data[id];
  tbody.innerHTML = cfg.rows.map((row,idx)=>rowHTML(id,row,idx)).join("");
}

function onEdit(id, idx){
  const form = document.getElementById(`${id}-form`);
  const cfg = data[id];
  const row = cfg.rows[idx];
  const inputs = [...form.querySelectorAll("input")];
  // Fill inputs exactly in header order (alignment guaranteed)
  inputs.forEach((input,i)=> input.value = row[i] ?? "");
  form.dataset.editIndex = String(idx);
  // Scroll to form for clarity
  form.scrollIntoView({behavior:"smooth", block:"center"});
}

function onDelete(id, idx){
  data[id].rows.splice(idx,1);
  rerenderTable(id);
  updateChart(id);
}

/* -------- Charts (simple & dynamic) -------- */
function buildChart(id){
  const canvas = document.getElementById(`${id}-chart`);
  if(!canvas) return;
  const ctx = canvas.getContext("2d");

  const {labels, values} = chartSeries(id);

  charts[id] = new Chart(ctx,{
    type: "pie",
    data: { labels, datasets: [{ data: values }] },
    options: {
      plugins: {
        legend: { position: "top" },
        title: { display: false }
      }
    }
  });
}

function updateChart(id){
  if(!charts[id]) return buildChart(id);
  const series = chartSeries(id);
  charts[id].data.labels = series.labels;
  charts[id].data.datasets[0].data = series.values;
  charts[id].update();
}

/* Heuristic: if a numeric column exists, chart that; else chart counts of first column */
function chartSeries(id){
  const cfg = data[id];
  const rows = cfg.rows;

  // find first numeric column index in the data
  let numIndex = -1;
  for (let c=0;c<cfg.headers.length-1;c++){
    if (rows.some(r => !isNaN(parseFloat(r[c])))) { numIndex = c; break; }
  }

  if (numIndex >= 0){
    // numeric series: use first column as label, numeric column as value
    const labels = rows.map(r => String(r[0]));
    const values = rows.map(r => parseFloat(r[numIndex]) || 0);
    return { labels, values };
  } else {
    // counts by first column
    const map = {};
    rows.forEach(r => { const k = String(r[0]); map[k] = (map[k]||0)+1; });
    return { labels:Object.keys(map), values:Object.values(map) };
  }
}

/* -------- Init -------- */
document.addEventListener("DOMContentLoaded", ()=>{
  // load default section
  showSection("meatProduct");
});
