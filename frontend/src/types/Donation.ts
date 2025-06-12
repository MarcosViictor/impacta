export type DonationType = {
    org: number; // ID of the ONG
    item_id: number; // ID of the item being donated
    donor: number
    quantity: number; // Quantity of the item being donated
    status: string // Status of the donation
  }

  export type Donation = {
    id: number; // Unique identifier for the donation
    nome: string; // Name of the donor
    data: string; // Date of the donation
    tipo: "Material" | "Financeira"; // Type of donation
    valor: string; // Value of the donation (if financial)
    status: "Pendente" | "Recebido" | "Em trânsito"; // Status of the donation
  }