import { promisify } from "util";
import { exec } from "child_process";

const execAsync = promisify(exec);

export async function ls(address) {
    
    const resultado = []

    const command = `ls -l ${address}`;
    
    const { stdout: result } = await execAsync(command);
    
    resultado.push(result);
    
    return resultado;
}
   
