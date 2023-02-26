/* Main script */
const btn = document.getElementById('btn-next-advice')

const getData = async () => {
    await fetch('https://api.adviceslip.com/advice?t=' + Math.random())
    .then(r=>r.json())
    .then(data=>{
        const {id,advice} = data['slip'];
        document.getElementById('advice').innerHTML = advice;
        document.getElementById('cite').innerText = `Advice #${id}`
        console.info('data fetched');
    })
    .catch(()=>console.warn('Unable to fetch data'))
};

window.addEventListener('load',getData)
btn.addEventListener('click',getData)