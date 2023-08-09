export default function MerchantItem({merchant, merchants, currentMerchant, setCurrentMerchant}){
    return(
        merchant?.id === currentMerchant?.id?
            <li className="list-group-item active d-flex align-items-center" aria-current="true">{merchant.name}</li>
        :
            <li onClick={e=>setCurrentMerchant(merchant)} className="list-group-item d-flex align-items-center">{merchant.name}</li>
    )
}