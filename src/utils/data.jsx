import AppleImage from '/src/assets/AppleGreen.png';
import AvocadoImage from '/src/assets/AvocadoHass.jpg';
import {GiCorn,GiMeat,GiMilkCarton,GiSlicedBread,GiDrinkMe,GiFruitBowl} from 'react-icons/gi';
export const navLinks=[
    {
        id:1,
        name:'store'
    },
    {
        id:2,
        name:'orders'
    },
    {
        id:3,
        name:'analytics'
    },
]


export const orderCategory=[
        {
            id:1,
            name:'corn',
            icon:<GiCorn/>
        },
        {
            id:2,
            name:'meat',
            icon:<GiMeat/>
        },
        {
            id:3,
            name:'milk',
            icon:<GiMilkCarton/>
        },
        {
            id:4,
            name:'bread',
            icon:<GiSlicedBread/>
        },
        {
            id:5,
            name:'drink',
            icon:<GiDrinkMe/>
        },
        {
            id:6,
            name:'fruit',
            icon:<GiFruitBowl/>
        },
]

export const productsList=[
    
    {
        id:1,
        image:AvocadoImage,
        name:'Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw Invivid',
        brand:'Hormel Black Label',
        price:'60.67',
    },
    {
        id:2,
        image:AppleImage,
        name:'Chicken Leg Boneless matuu maMarinated 6 Ounce Raw Invivid',
        brand:'Hormel White Label',
        price:'50.57',
    },
    
    {
        id:3,
        image:AvocadoImage,
        name:'Chicken Breast Fillets, BonelessBoneless matuu maMarinated 6 Ounce Raw Invivid',
        brand:'Hormel Black Label',
        price:'60.67',
    },
    {
        id:4,
        image:AppleImage,
        name:'Chicken Leg Boneless matuu maMarinated 6 Ounce Raw Invivid',
        brand:'Hormel White Label',
        price:'50.57',
    },
    
    {
        id:5,
        image:AvocadoImage,
        name:'Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw Invivid',
        brand:'Hormel Black Label',
        price:'60.67',
    },
    {
        id:6,
        image:AppleImage,
        name:'Chicken Leg Boneless matuu maMarinated 6 Ounce Raw Invivid',
        brand:'Hormel White Label',
        price:'50.57',
    },
    
    {
        id:7,
        image:AvocadoImage,
        name:'Chicken Breast Fillets, Boneless Boneless matuu maMarinated 6 Ounce Raw Invivid',
        brand:'Hormel Black Label',
        price:'60.67',
    },
    {
        id:8,
        image:AppleImage,
        name:'Chicken Leg Boneless matuu maMarinated 6 Ounce Raw Invivid',
        brand:'Hormel White Label',
        price:'50.57',
    },
    
    {
        id:9,
        image:AvocadoImage,
        name:'Chicken Breast Fillets, Boneless Boneless matuu maMarinated 6 Ounce Raw Invivid',
        brand:'Hormel Black Label',
        price:'60.67',
    },
    {
        id:10,
        image:AppleImage,
        name:'Chicken Leg Boneless matuu maMarinated 6 Ounce Raw Invivid',
        brand:'Hormel White Label',
        price:'50.57',
    }   
]

 export const changeReason=[
    {
        id:1,
        reason:"Missing Product",
    },
    {
        id:2,
        reason:"Quantity is not the same",
    },
    {
        id:3,
        reason:"Price is not the same",
    },
    {
        id:3,
        reason:"Other",
    },
]