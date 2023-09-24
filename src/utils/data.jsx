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
export const productHeader=[
    {
        id:'01',
        name:'product name',
    },
    {
        id:'02',
        name:'brand',
    },
    {
        id:'03',
        name:'price',
    },
    {
        id:'04',
        name:'quantity',
    },
    {
        id:'05',
        name:'total',
    },
    {
        id:'06',
        name:'status',
    },
]


export const productsList=[
    
    {
        id:1,
        image:AvocadoImage,
        name:'Chicken Breast Fillets, Boneless matuu 1 maMarinated Ounce Raw Invivid',
        brand:'Hormel Black Label',
        quantity:'66',
        price:'66.67',
        isApprove:false,
        isMissing:{
            isNormal:false,
            isUrgent:false
        }
    },
    {
        id:2,
        image:AppleImage,
        name:'Chicken Leg Boneless matuu maMarinated 2 Ounce Raw Invivid',
        brand:'Hormel White Label',
        quantity:'15',
        price:'29.99',
        isApprove:false,
        isMissing:{
            isNormal:false,
            isUrgent:false
        }
    },
    
    {
        id:3,
        image:AvocadoImage,
        name:'Chicken Breast Fillets, BonelessBoneless 3 matuu maMarinated  Ounce Raw Invivid',
        brand:'Hormel Black Label',
        quantity:'5',
        price:'60.67',
        isApprove:false,
        isMissing:{
            isNormal:false,
            isUrgent:false
        }
    },
    {
        id:4,
        image:AppleImage,
        name:'Chicken Leg Boneless matuu maMarinated 4 Ounce Raw Invivid',
        brand:'Hormel White Label',
        quantity:'6',
        price:'90.57',
        isApprove:false,
        isMissing:{
            isNormal:false,
            isUrgent:false
        }
    },
    
    {
        id:5,
        image:AvocadoImage,
        name:'Chicken Breast Fillets, Boneless matuu 5 maMarinated  Ounce Raw Invivid',
        brand:'Hormel Black Label',
        quantity:'16',
        price:'80.67',
        isApprove:false,
        isMissing:{
            isNormal:false,
            isUrgent:false
        }
    },
    {
        id:6,
        image:AppleImage,
        name:'Chicken Leg Boneless matuu maMarinated 6 Ounce Raw Invivid',
        brand:'Hormel White Label',
        quantity:'66',
        price:'50.57',
        isApprove:false,
        isMissing:{
            isNormal:false,
            isUrgent:false
        }
    },
    
    {
        id:7,
        image:AvocadoImage,
        name:'Chicken Breast Fillets, Boneless Boneless 7 matuu maMarinated  Ounce Raw Invivid',
        brand:'Hormel Black Label',
        quantity:'35',
        price:'10.67',
        isApprove:false,
        isMissing:{
            isNormal:false,
            isUrgent:false
        }
    },
    {
        id:8,
        image:AppleImage,
        name:'Chicken Leg Boneless matuu maMarinated 8 Ounce Raw Invivid',
        brand:'Hormel White Label',
        quantity:'65',
        price:'24.57',
        isApprove:false,
        isMissing:{
            isNormal:false,
            isUrgent:false
        }
    },
    
    {
        id:9,
        image:AvocadoImage,
        name:'Chicken Breast Fillets, Boneless Boneless 9 matuu maMarinated  Ounce Raw Invivid',
        brand:'Hormel Black Label',
        quantity:'40',
        price:'60.67',
        isApprove:false,
        isMissing:{
            isNormal:false,
            isUrgent:false
        }
    },
    {
        id:10,
        image:AppleImage,
        name:'Chicken Leg Boneless matuu maMarinated 10 Ounce Raw Invivid',
        brand:'Hormel White Label',
        quantity:'20',
        price:'50.57',
        isApprove:false,
        isMissing:{
            isNormal:false,
            isUrgent:false
        }
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
        id:4,
        reason:"Other",
    },
]