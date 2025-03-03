const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

const mainCourseMenuItemsHTML = mainCourseMenu.map((item, index) => `<p>Item ${index+1}: ${item}</p>`).join('');
document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItemsHTML;

let dessertMenuItemsHTML = '';
dessertMenu.forEach((item, index) => {
    dessertMenuItemsHTML += `<p>Item ${index+1}: ${item}</p>`;
});
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItemsHTML;