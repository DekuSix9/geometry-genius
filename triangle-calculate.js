

function calculateTriangleArea(){
    const triangleBaseInput=document.getElementById('triangle-base');
    const triangleBaseText=triangleBaseInput.value;
    const base=parseFloat(triangleBaseText)
    triangleBaseInput.value=''




    const triangleHeightInput=document.getElementById('triangle-height');
    const triangleHeightText=triangleHeightInput.value;
    const height=parseFloat(triangleHeightText);
    triangleHeightInput.value=''

    
    

    const area=0.5*base*height;
    console.log("Area:",area)

   
    const calculatedarea=document.getElementById('calculated-area');
    const createList = document.createElement('h1');

    createList.innerText=`Triangle Area:${area}`;
    calculatedarea.append(createList)




}


function calculatedRectangleArea(){
    const RectangleBaseInput=document.getElementById('Rectangle-base')
    const RectangleBaseText=RectangleBaseInput.value;
    const width=parseFloat(RectangleBaseText);
    RectangleBaseInput.value=''



    const RectangleLenghtInput=document.getElementById('Rectangle-height')
    const RectangleLenghtText=RectangleLenghtInput.value;
    const lenght=parseFloat(RectangleLenghtText);
    RectangleLenghtInput.value='';

    const Area=width*lenght;

    const calculateAreea=document.getElementById('calculated-area');

    const h1=document.createElement('h1');
    h1.innerText=`Reactangle Area:${Area}`;
    calculateAreea.append(h1)


}