import { useState } from 'react'
import QRCode from 'react-qr-code'
import './styles.css';
export default function QRCodeGenerator() {
    const [input, setInupt] = useState('');
    const[qrCode, setQRCode] = useState('');

    function generateQRCode(){
        setQRCode(input)
        setInupt('');
    }

    return <div className='whole-container'>
    <h1>QR Code Generator</h1>
    <div>
        <input placeholder='Enter your value here...' type="text" value={input} onChange={(e) => setInupt(e.target.value)} name='input-value'/>
        <button disabled={input && input.trim() !== '' ? false: true} onClick={generateQRCode}>Generate QR</button>
    </div>
    <div>
        <QRCode value={qrCode}/>
    </div>
    </div>
}