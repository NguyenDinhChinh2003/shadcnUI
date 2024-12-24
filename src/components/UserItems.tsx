export default function UserItem() {
    return <div className="flex items-center justify-start gap-2 border rounded-[8px] px-2">
        <div className="avatar rounded-full min-h-12 min-w-12 bg-emerald-500 text-white font-[700] flex items-center justify-center">
            <p>NC</p>
        </div>
        <div>
            <p className="text-[16px] font-bold">Nguyen Dinh Chinh</p>
            <p className="text-[12px] text-neutral-500">chinh@gmail.com</p>
        </div>
    </div>
}