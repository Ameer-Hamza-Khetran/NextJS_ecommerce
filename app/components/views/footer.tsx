interface FooterHeading {
    title: string
    links: FooterHeadingLinks[]
}
interface FooterHeadingLinks {
            id: number,
            name: string
}

function FooterHeadings({title, links}:FooterHeading) {
    return(
        <div className="w-5/6 mx-auto">
            <h3 className="text-xl text-gray-500 font-bold mb-5 mt-8">{title}</h3>
            {links.map( (link:FooterHeadingLinks) => {
                return(
                    <div key={link.id} className="mt-3 text-gray-600">{link.name}</div>
                );
                
            } )}
        </div>
    );
}

function Line() {
    return(
        <hr className="border-black mt-16"></hr>
    );
}

function Copyright() {
    return(
        <div className="text-gray-700 flex flex-col w-5/6 mx-auto">
            <div className="mt-5">
                Copyright &copy; 2023 Dine Market
            </div>
            <div className="mt-5">
                Design by: <b>Weird Design Studio</b>
            </div>
            <div className="mt-5 mb-2">
                Code by: <b>shabrina12 on github</b>
            </div>
        </div>
    );
}

export default function Footer() {
    return(
        <div className="mt-32">
            <FooterHeadings
                title={'Company'}
                links={[
                    {
                        id: 0,
                        name: 'About'
                    },
                    {
                        id: 1,
                        name: 'Terms of Use'
                    },
                    {
                        id: 2,
                        name: 'Privacy Policy'
                    },
                    {
                        id: 3,
                        name: 'How it Works'
                    },
                    {
                        id: 4,
                        name: 'Contact Us'
                    }
                ]}
            />
            <FooterHeadings
                title={'Support'}
                links={[
                    {
                        id: 0,
                        name: 'Support Carrer'
                    },
                    {
                        id: 1,
                        name: '24h Service'
                    },
                    {
                        id: 2,
                        name: 'Quick Chat'
                    }
                ]}
            />
            <FooterHeadings
                title={'Contact'}
                links={[
                    {
                        id: 0,
                        name: 'Whatsapp'
                    },
                    {
                        id: 1,
                        name: 'Support 24h'
                    }
                ]}
            />
            <Line />
            <Copyright />
        </div>
    );    
}