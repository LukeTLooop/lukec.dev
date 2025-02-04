
import { useState } from "react";

const Projects = () => {
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");

    return (
        <div className="mb-48">
            <h2 className="text-center text-4xl text-green-500 mb-2 pt-8">Projects</h2>
            <hr className="mb-10 border-green-700" />
            <input
                type="text"
                className="border-none outline-none m-0 p-0 bg-transparent text-white"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        let newOutput = "";
                        newOutput = output + "\n" + "$ " + input + "\n";
                        switch (input) {
                            case "ls": {
                                newOutput += "List of projects";
                                break;
                            }
                            case "pwd": {
                                newOutput += "https://www.lukec.dev/";
                                break;
                            }
                            default: {
                                newOutput += "Unknown command!";
                                break;
                            }
                        }
                        setOutput(newOutput);
                        setInput("");
                    }
                }}
            />
            <div className="whitespace-pre-line">
                {output}
            </div>
        </div>
    );
};

export default Projects;
