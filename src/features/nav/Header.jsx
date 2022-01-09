import React, {useState} from 'react';

import { SidebarModal } from './SidebarModal';

export function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div className="fixed bg-white w-screen top-0 left-0 z-0 border-b-2">
                <div
                    className="mx-auto py-4 px-2 text-purple-600 flex items-center"
                    style={{ maxWidth: '1500px' }}
                >
                    <button
                        className="mr-4 md:hidden hover:text-purple-800"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <i className="fas fa-bars fa-lg "></i>
                    </button>
                    <h1 className="text-lg font-bold">Dukaan</h1>
                    <div className="flex space-x-4 ml-auto">
                        {false ? (
                            <button
                                className="hover:text-purple-800"
                                // onClick={() => logoutUser()}
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <button
                                    className="hover:text-purple-800"
                                >
                                    Login
                                </button>
                                <button
                                    className="hover:text-purple-800"
                                >
                                    Register
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {sidebarOpen && <SidebarModal setSidebarOpen={setSidebarOpen} />}
        </>
    );
}
