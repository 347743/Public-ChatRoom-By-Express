import{ formatDistance } from "date-fns";
export function Lielements(chatul) {

    const newli = (data) => {
        // cdn 
        // const when = dateFns.formatDistance(data.created_at.toDate(), new Date(),{ addSuffix: true });
        // npm 
        const when = formatDistance(data.created_at.toDate(), new Date(),{ addSuffix: true });


        const html = `
        <li class="shadow rounded-lg px-4 py-2">
                        <div class="flex justify-between">
                            <h5 class="text-gray-600 font-medium text-sm">${data.username}</h5>
                            <i class="text-gray-300 text-xs">${when}</i>
                        </div>
                        <p class="text-gray-600 text-sm">${data.message}</p>
        </li>
        `;
        chatul.innerHTML += html;
    }
    const resultli = () =>{
        chatul.innerHTML = '';
    }

    return {newli, resultli };

    
}