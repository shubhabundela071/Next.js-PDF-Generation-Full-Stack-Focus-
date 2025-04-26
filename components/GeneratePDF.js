import jsPDF from "jspdf";
import "jspdf-autotable";

export default function GeneratePDF({ person }) {
  function generate() {
    const doc = new jsPDF();

    doc.autoTable({
      head: [["Name", "Email", "Role", "Age", "Address"]],
      body: person.map(({ name, email, role, age, address }) => {
        return [name, email, role, age, address];
      }),
    });

    doc.save("persons.pdf");
  }

  return (
    <div>
      <button onClick={generate} type="primary">
        Download PDF
      </button>
    </div>
  );
}
