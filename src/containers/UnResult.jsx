import { SearchBox } from "../base/Logo";
export const UnResult = () => {
    return (

        <div className={'d-flex flex-column justify-content-center align-items-center mt-5 h-100 w-100 gap-3'} >
            <SearchBox style={{ width: 200 }} />
            <p style={{textAlign : 'justify'}} className="text-white w-25">عنوان فیلم، سریال یا بازیگر مورد نظر خود را جستجو کنید و یا از طریق فیلترهای موجود، فیلم و سریال مورد علاقه خود را پیدا کنید.</p>
        </div>

    )
};