function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const sections = {
    meatData: { 
      title: 'Meat Product Data', 
      headers: ['ID','Product','Type','Quantity'], 
      rows: [
        ['1','Beef Ribeye','Red Meat','50'],
        ['2','Chicken Breast','Poultry','120'],
        ['3','Lamb Chops','Red Meat','40'],
        ['4','Pork Belly','White Meat','70'],
        ['5','Turkey Drumsticks','Poultry','90']
      ]
    },
    incomingLivestock: { 
      title: 'Incoming Livestock/Meat', 
      headers: ['ID','Source','Date','Quantity'], 
      rows: [
        ['1','Farm A','2025-08-01','20'],
        ['2','Farm B','2025-08-02','35'],
        ['3','Farm C','2025-08-05','50'],
        ['4','Supplier X','2025-08-07','45'],
        ['5','Supplier Y','2025-08-10','30']
      ]
    },
    stockLevels: { 
      title: 'Stock Levels', 
      headers: ['ID','Product','Available','Unit'], 
      rows: [
        ['1','Beef','200','kg'],
        ['2','Chicken','350','kg'],
        ['3','Lamb','150','kg'],
        ['4','Pork','250','kg'],
        ['5','Turkey','180','kg']
      ]
    },
    expirationBatch: { 
      title: 'Expiration & Batch', 
      headers: ['Batch ID','Product','Expiry Date'], 
      rows: [
        ['B1','Beef Ribeye','2025-09-10'],
        ['B2','Chicken Breast','2025-09-05'],
        ['B3','Pork Belly','2025-09-12'],
        ['B4','Lamb Chops','2025-09-08'],
        ['B5','Turkey Drumsticks','2025-09-15']
      ]
    },
    storageConditions: { 
      title: 'Storage Conditions', 
      headers: ['ID','Storage Type','Temperature','Humidity'], 
      rows: [
        ['1','Freezer','-18°C','50%'],
        ['2','Chiller','4°C','40%'],
        ['3','Dry Storage','20°C','35%'],
        ['4','Cold Room','2°C','45%'],
        ['5','Blast Freezer','-25°C','55%']
      ]
    },
    yieldAnalysis: { 
      title: 'Yield Analysis', 
      headers: ['Batch ID','Input Weight','Output Weight','Yield %'], 
      rows: [
        ['Y1','100','85','85%'],
        ['Y2','200','170','85%'],
        ['Y3','150','120','80%'],
        ['Y4','250','200','80%'],
        ['Y5','300','255','85%']
      ]
    },
    complianceRecall: { 
      title: 'Compliance & Recall', 
      headers: ['Case ID','Issue','Status','Date'], 
      rows: [
        ['C1','Label Misprint','Resolved','2025-08-10'],
        ['C2','Storage Deviation','Ongoing','2025-08-15'],
        ['C3','Supplier Non-Compliance','Investigation','2025-08-18'],
        ['C4','Batch Contamination','Resolved','2025-08-12'],
        ['C5','Temperature Fluctuation','Ongoing','2025-08-14']
      ]
    }
  };

  Object.entries(sections).forEach(([id, data]) => {
    const sec = document.getElementById(id);
    if (!sec) return;
    sec.innerHTML = `
      <div class="card">
        <h3>${data.title}</h3>
        <table>
          <thead><tr>${data.headers.map(h=>`<th>${h}</th>`).join('')}<th>Actions</th></tr></thead>
          <tbody></tbody>
        </table>
        <form>
          ${data.headers.slice(1).map(h=>`<input placeholder="${h}" required>`).join('')}
          <button type="submit">Add / Update</button>
        </form>
        <canvas id="chart-${id}" height="100"></canvas>
      </div>`;

    const tbody = sec.querySelector('tbody');
    const form = sec.querySelector('form');
    const inputs = form.querySelectorAll('input');
    let editIndex = null;

    function renderTable() {
      tbody.innerHTML = data.rows.map((r,i)=>`
        <tr>${r.map(c=>`<td>${c}</td>`).join('')}
        <td class="actions">
          <button class="edit" data-index="${i}"><i class="fa-solid fa-pen"></i></button>
          <button class="delete" data-index="${i}"><i class="fa-solid fa-trash"></i></button>
        </td></tr>`).join('');
      updateChart();
    }

    function updateChart() {
      const ctx = document.getElementById(`chart-${id}`).getContext('2d');
      if (sec.chart) sec.chart.destroy();
      sec.chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: data.rows.map(r=>r[1]),
          datasets: [{ data: data.rows.map(()=>Math.floor(Math.random()*50)+10) }]
        }
      });
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      const values = [ (editIndex!==null? data.rows[editIndex][0] : (data.rows.length+1).toString()), ...Array.from(inputs).map(inp=>inp.value) ];
      if (editIndex!==null) {
        data.rows[editIndex] = values;
        editIndex = null;
      } else {
        data.rows.push(values);
      }
      form.reset();
      renderTable();
    });

    tbody.addEventListener('click', e => {
      if (e.target.closest('.edit')) {
        const i = e.target.closest('.edit').dataset.index;
        editIndex = parseInt(i);
        inputs.forEach((inp,j)=> inp.value = data.rows[i][j+1]);
      }
      if (e.target.closest('.delete')) {
        const i = e.target.closest('.delete').dataset.index;
        data.rows.splice(i,1);
        renderTable();
      }
    });

    renderTable();
  });
});
