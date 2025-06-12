export type DonationType = {
    org: number; // ID of the ONG
    item_id: number; // ID of the item being donated
    donor: number
    quantity: number; // Quantity of the item being donated
    status: string // Status of the donation
  }