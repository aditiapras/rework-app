import Footer from "@/components/Footer";

export default function Dashboard(){
    return(
        <>
        <div className="flex flex-col justify-center w-full items-center gap-3 border h-screen py-16">
            <div className="w-2/3">
                <h1 className="font-bold text-3xl mt-2">Dashboard</h1>
            </div>
            <div className="w-2/3 h-full border-2 border-dashed rounded-xl p-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus obcaecati tempore commodi porro, ab harum sit facilis eveniet et omnis illum nobis quis, nam suscipit. Labore nostrum consectetur accusamus dolore commodi quos, adipisci error eligendi impedit repellat soluta earum iusto esse aliquam ut dignissimos, id placeat, et cumque!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis esse est magnam unde sit nihil beatae a nisi eaque corporis.</p>
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci numquam quos magnam ipsum rerum similique at, nulla facere assumenda dolorem!</h1>
            </div>
        </div>
        <Footer />
        </>
    )
}