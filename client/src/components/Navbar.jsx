

export default function Navbar() {
  return (
    <>
       <div className="navbar bg-base-100 bg-red-500 text-white rounded-2xl">
           <div className="flex-1">
                <a href="/" className="btn btn-ghost text-xl">BloodNepal</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>
                            Link
                        </a>
                    </li>
                    <li>
                        <details>
                            <summary>Blood Donation</summary>
                        <ul className="bg-base-100 rounded-t-none p-2 bg-red-500 text-white">
                            <li>    
                                <a href="Login.jsx">
                                    Login
                                </a>
                            </li>
                            <li>
                                <a>
                                    Signup
                                </a>
                            </li>
                        </ul>
                        </details>
                </li>
    </ul>
  </div>
</div>
    </>
  )
};
