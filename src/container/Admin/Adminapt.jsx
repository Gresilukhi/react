import React from "react";

function Adminapt() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Edit Appointment (Admin)</h2>

        <form>
          {/* Doctor */}
          <div style={styles.field}>
            <label style={styles.label}>Doctor</label>
            <input type="text" name="name" style={styles.input} placeholder="Enter Doctor Name"/>
          </div>

          {/* Appointment Date */}
          <div style={styles.field}>
            <label style={styles.label}>Appointment Date</label>
            <input type="date" style={styles.input} />
          </div>

          {/* Appointment Time */}
          <div style={styles.field}>
            <label style={styles.label}>Appointment Time</label>
            <input type="time" style={styles.input} />
          </div>

          {/* Status */}
          <div style={styles.field}>
            <label style={styles.label}>Status</label>
            <select style={styles.input}>
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Rescheduled</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>

          
          {/* Payment Status */}
          <div style={styles.field}>
            <label style={styles.label}>Payment Status</label>
            <select style={styles.input}>
              <option>Pending</option>
              <option>Paid</option>
              <option>Free</option>
              <option>Refunded</option>
            </select>
          </div>

          {/* Admin Remarks */}
          <div style={styles.field}>
            <label style={styles.label}>Admin Remarks</label>
            <textarea
              rows="3"
              style={styles.textarea}
              placeholder="Enter remarks (optional)"
            />
          </div>

          {/* Buttons */}
          <div style={styles.actions}>
            <button type="reset" style={styles.resetBtn} >
              Reset
            </button>
            <button type="submit" style={styles.submitBtn}>
              Update Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f5f7fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: "25px",
    width: "100%",
    maxWidth: "450px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  field: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    resize: "none",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginTop: "20px",
  },
  resetBtn: {
    padding: "8px 14px",
    border: "none",
    backgroundColor: "#6c757d",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
  },
  submitBtn: {
    padding: "8px 14px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
  },
  // hellooo
};

export default Adminapt;
