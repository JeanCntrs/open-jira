interface seedData {
    entries: seedEntry[];
}

interface seedEntry {
    description: string,
    status: string;
    createdAt: number;
}

export const seedData: seedData = {
    entries: [
        {
            description: 'aaaa aaaa aaaa',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            description: 'bbbb bbbb bbbb',
            status: 'inProgress',
            createdAt: Date.now() - 1000000
        },
        {
            description: 'cccc cccc cccc',
            status: 'finished',
            createdAt: Date.now() - 100000
        }
    ]
}