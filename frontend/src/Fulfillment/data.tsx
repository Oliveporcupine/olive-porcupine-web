export default{
    fulfillment: [{
        _id: 1,
        status: 'unshipped',
        address: '123 Main St, Columbus, OH, 43210',
        user: {
            name: 'Taylor'
        },
        deliveredDateExpected: '02/23/2021',
        dateRecieved: null,
        },
    {
        _id: 2,
        status: 'unshipped',
        address: '456 West St, Westerville, OH, 43082',
        user: {
            name: 'Pedro'
        },
        deliveredDateExpected: '02/25/2021',
        dateRecieved: null,
    },
    {
        _id: 3,
        status: 'shipped',
        address: '789 East St, Lewis Center, OH, 43035',
        user: {
            name: 'Sanjay'
        },
        deliveredDateExpected: '02/27/2021',
        dateRecieved: '02/26/2021',
    }]
}