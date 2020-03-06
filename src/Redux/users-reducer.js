

let initialState = {
    users:[
        {id:1, fullName:'Johnatan',status:'I am ok', location: {city:'city19',country:'country7'}},
        {id:2, fullName:'Dmitry',status:'I am not ok', location: {city:'city15',country:'country8'}},
        {id:3, fullName:'Sam',status:'I am high', location: {city:'city51',country:'country1'}},
        {id:4, fullName:'Nick',status:'ok', location: {city:'city02',country:'country4'}},
        {id:5, fullName:'Anna',status:'jjjj', location: {city:'city46',country:'country3'}},
        {id:6, fullName:'Nina',status:'nnnn', location: {city:'city1',country:'country7'}}
    ]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {

    }
    return state;
};

export default userReducer;