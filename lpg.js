let julj=[
   {operator: 'Постернак Валентина Генадіївна' ,
   namber:' 8',
tab: 'no'   ,
tel: '097-416-70-31',
district:'Кременчук держ'
   },
   {operator: 'Сапелкіна Зоя Іванівна',
      namber:'10',
   tab:'484',
   tel:'097-117-21-88',
   district:'Кременчук держ., 3-й Занасип'
      },   {operator:'Ільєвська Тетяна Олегівна',
         namber: '16',
      tab: 1502,
      tel:'096-184-78-97',
      district:'Кременчук держ.'

         },   {operator:'Власенко Наталія Миколаївна'  ,
            namber: '17 ',
         tab:  'no'  ,
         tel: '067-404-84-87',
         district:'Кременчук держ.'
            },   {operator:'Ченакал Тетяна Євгеніївнa'  ,
               namber: '18' ,
            tab: 'no'   ,
            tel: '097-881-10-59' ,
            district:'Кременчук держ.'
               },   {operator:'Максимович Налалія Володимирівна'  ,
                  namber:'22 ' ,
               tab:  'no'  ,
               tel:' 096-544-44-86',
               district:'Кременчук(2-й,3-й Занасип), М.Кохнівкa'
                  },  
                   {operator:'Ішкова Юлія Анатоліївна',
                     namber:'31',
                  tab:1290, 
                  tel: '068-422-15-00',
                  district:'Крюків держ, Раківка'

                },
                {operator:'Крячко Ляна Леонідівн',
                namber:'32',
             tab:'507'             , 
             tel: '068-155-19-88/098-722-20-39',
             district:'Крюків держ'

           },
           {operator:'Цимбалюк Людмила Володимирівна           ',
           namber:'34',
        tab:'2161'             , 
        tel: '097 463-66-75        ',
        district:'Крюків держ        '

      },
      {operator:'Балязіна Вікторія Валеріївна',
      namber:'33',
   tab:'2573'             , 
   tel: '067-799-71-69',
   district:'Крюків держ, Раківкa'

 },     
  {operator:'Юренко Наталія Григорівна  ',
 namber:'37',
tab:'2574'             , 
tel: '067-530-48-96',
district:'Крюків, К-Потоки, Садки'

},  
{operator:'Голуб Світлана Іванівна',
namber:'40',
tab:'2202'             , 
tel: '098-284-13-98',
district:'Кременчук(Нагірна), Білецьківка, Бурти, Підгірне, Чечелево'

},
{operator:'Чуракова Юлія Андріївна',
namber:'47',
tab:'1554'             , 
tel: '067-929-28-02',
district:'К-Потоки, Роєво, Чикалівка'

},
{operator:'Матвійчук Надія Степанівна',
namber:'50',
tab:'1816'             , 
tel: '097-232-69-21/068-344-22-39',
district:'Кременчук(Чередники), Крюків, Чечелево'

},
{operator:'Тихоненко Інна  Вікторівна',
namber:'54',
tab:'687'             , 
tel: '097-295-60-23/097-762-70-76',
district:'Кременчук(Чередники), Крюків, Чечелево'

},
{operator:'Самойленко Людмила Григорівна',
namber:'55',
tab:'1647'             , 
tel: '098-677-83-49',
district:'Кременчук, Крюків'

},
{operator:'Давиденко Аліна Миколаївна',
namber:'56',
tab:'647'             , 
tel: '067-957-76-07',
district:'Кременчук(Нагірна),Крюків, Чечелево'

},{operator:'Краплина Вікторія Володимирівна',
namber:'62',
tab:'2789'             , 
tel: '098-452-08-28',
district:'Крюків, К-Потоки, Садки'

},{operator:'Виходець Олена Григорівна',
namber:'64',
tab:'no'             , 
tel: '068-767-63-28/093-255-69-28',
district:'Крюків, К-Потоки, Садки'

},
{operator:'Гирман  Віра Миколаївна',
namber:'70',
tab:'1667'             , 
tel: '098-960-10-31',
district:'Кременчук( Чередники), Білецьківка, Маламівка, Новоселівка, Ст.Білецьківка'

},{operator:'Веселова Оксана Андріївна',
namber:'81',
tab:'no'             , 
tel: '067-706-71-00',
district:'Кременчук(1-й, 2-й,3-й Занасип)'

 },//{operator:'',
// namber:'',
// tab:''             , 
// tel: '',
// district:'' },

]
                 









 document.getElementById('btn').addEventListener('click',()=>{

   let inp =document.getElementById('inp').value
  

    let out=document.querySelector('.out')
    console.log(inp);
    let n=Number(inp)
    console.log(n);
  
    
   julj.map(j=>{
   j.operator.includes(inp)?out.innerHTML= `<br> Дільниця: <p class="p1">${j.district}</p> Табельний номер:<p  class="p4">${j.tab}</p>контролер:<p class="p2">${j.operator}</p> телефон контролера:<p class="p3">${j.tel}</p>`:console.log(inp);
   
   j.operator.includes(inp)?out.classList.add('h'):console.log('j');
   

   
   




   } )









})
