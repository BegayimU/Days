let day = prompt ('Жуманын күнүн жаз (цыфра менен 1ден-7ге чейин)')
switch (day) {
    case ('1'):
        alert('Дүйшөмбү')        
        break;
    case ('2'):
        alert('Шейшемби')
        break;
    case ('3'):  
        alert('Шаршемби')
        break;
    case ('4'):
        alert('Бейшемби')
        break;
    case ('5'):  
        alert('Жума')
        break;  
    case ('6'):
        alert('Ишемби')
        break;
    case ('7'):  
        alert('Жекшемби')
        break;          
    default:
        alert('Туура жаз!')
        break;
}