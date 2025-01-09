import{ format } from "date-fns";
export function UiElement(divele){
 
    const userinfoEle = (data) =>{

        const uid = data.uid;
        const email = data.email;
        const fullname = data.displayName;
        const photourl = data.photoURL;
        const createdtime = data.metadata.creationTime;

        // const getdate = new Date(createdtime).getDate();

        // const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        // const getmonth = new Date(createdtime).getMonth();

        // const getyear = new Date(createdtime).getFullYear();

        // const formatteddate = ${getdate} ${months[getmonth]} ${getyear};

        // const formatteddate = dateFns.format(new Date(createdtime), 'do MMM yyy');

        const formattedate = format(new Date(createdtime),"do MMM yyyy");
        console.log(formattedate);


        const html = `
            <img src="${photourl}" width="100" alt="profile icon">
            <p>UID : ${uid}</p>
            <p>Display Name : ${fullname}</p>
            <p>Email : ${email} </p>
            <p>Created At : ${formattedate} </p>
            `
        ;

        divele.innerHTML = html;
    }

    return {userinfoEle}
}