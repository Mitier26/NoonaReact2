import EggDuck from '../../images/chick_789422.png';
import IdleDuck from '../../images/duck.png';
import SwimDuck from '../../images/giant-duck.png';
import ShowerDuck from '../../images/rubber-duck_6969947.png';
import SleepDuck from '../../images/pillow_2865786.png';

let initialState = {
    items: [
        {
            title: '깨어나기',
            image: EggDuck,
            level: 0,
            increase: 1,
            cost: 50,
        },
        {
            title: '멍때리기',
            image: IdleDuck,
            level: 0,
            increase: 2,
            cost: 100,
        },
        {
            title: '수영하기',
            image: SwimDuck,
            level: 0,
            increase: 5,
            cost: 250,
        },
        {
            title: '샤워하기',
            image: ShowerDuck,
            level: 0,
            increase: 10,
            cost: 500,
        },
        {
            title: '잠자기',
            image: SleepDuck,
            level: 0,
            increase: 20,
            cost: 1500,
        },
    ],
};

function itemReducer(state = initialState, action) {
    switch (action.type) {
        case 'ITEM_UPGRADE':
            return {
                ...state,
                items: state.items.map((item, index) => {
                    if (index === action.payload.index) {
                        return {
                            ...item,
                            level: item.level + action.payload.level,
                        };
                    }
                    return item;
                }),
            };
        default:
            return { ...state };
    }
}

export default itemReducer;
