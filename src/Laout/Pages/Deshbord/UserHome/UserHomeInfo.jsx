
const UserHomeInfo = () => {
    return (
        <div>
             <div className="flex justify-center gap-4 mt-4 ">
                {/* phone contact */}
                <div>
                    <div className="w-72 h-28  flex flex-col ">

                        <div className="card-body items-center bg-purple-600 rounded-lg p-4 w-full ">
                            <h2 className="card-title">PHONE</h2>

                        </div>
                    </div>
                </div>
                {/* Location contact */}
                <div>
                <div className="w-72  h-28  flex flex-col ">

                        <div className="card-body bg-amber-300 items-center rounded-lg p-4 w-full ">
                            <h2 className="card-title">PHONE</h2>

                        </div>
                    </div>
                </div>
           

                <div>
                <div className="w-72 h-28  flex flex-col ">

                        <div className="card-body bg-red-500 items-center rounded-lg p-4 w-full ">
                            <h2 className="card-title">PHONE</h2>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHomeInfo;