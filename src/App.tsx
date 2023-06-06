import { Editor } from "./components/Editor";

function App() {
    return (
        <div>
            <Editor
                onChange={(e) => {
                    console.log(e.currentTarget.value);
                }}
            />
        </div>
    );
}

export default App;
