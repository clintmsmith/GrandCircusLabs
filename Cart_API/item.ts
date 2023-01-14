// This is known as "modeling" because it represents
export interface Item {
    id: number,
    product: string,
    price: number,
    quantity: number,
    isActive: boolean,
};

// The way I have the DELETE setup currently is a 'Hard Delete'
// We added the isActive above when working on the 'Soft Delete'