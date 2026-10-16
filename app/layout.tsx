import type {Metadata} from 'next';import './globals.css';import Header from '../components/header';import Footer from '../components/footer';
export const metadata:Metadata={title:{default:'The Observer — Written in the present',template:'%s | The Observer'},description:'A firsthand archive of ideas, predictions and experiences during a changing age.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}

