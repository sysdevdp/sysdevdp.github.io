import React, { useState } from "react";
import "./about_new.css";

const timelineData = [
    {
        year: "2019",
        event: "Started College",
        detail: "Began IT studies focusing on networking, systems, and programming fundamentals.",
    },
    {
        year: "2021",
        event: "Home Lab",
        detail: "Built Linux servers, AWS environments, and virtualization setups.",
    },
    {
        year: "2023",
        event: "Graduated",
        detail: "Completed degree and moved into cloud + full-stack engineering.",
    },
    {
        year: "2024",
        event: "First Job",
        detail: "Worked in systems/software engineering and infrastructure support roles.",
    },
    {
        year: "2025",
        event: "Projects",
        detail: "Building full-stack apps using React, Next.js, Electron, AWS.",
    },
];

const AboutNew = () => {
    const [state, setState] = useState("normal");

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const startDrag = (e) => {
        setDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const onDrag = (e) => {
        if (!dragging) return;

        setPosition({
            x: e.clientX - offset.x,
            y: e.clientY - offset.y,
        });
    };

    const stopDrag = () => setDragging(false);

    const minimize = () => {
        setState("minimized");
    };

    const openFromFolder = () => {
        setState("normal");
    };

    if (state === "minimized") {
        return (
            <section className="about-new">
                <div className="dock">
                    <div className="folder" onClick={openFromFolder}>
                        📁 timeline.json
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section
            className="about-new"
            onMouseMove={onDrag}
            onMouseUp={stopDrag}
        >
            <h2 className="section__title">My Journey</h2>

            <div
                className="vscode-window draggable"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            >
                {/* TOP BAR (DRAG HANDLE) */}
                <div className="vscode-topbar drag-handle" onMouseDown={startDrag}>
                    <div className="dots">
                        <span className="dot red clickable" onClick={minimize} />
                        <span className="dot yellow clickable" onClick={minimize} />
                        <span
                            className="dot green clickable"
                            onClick={() =>
                                setState(state === "expanded" ? "normal" : "expanded")
                            }
                        />
                    </div>

                    <div className="filename">timeline.json</div>
                </div>

                {/* EDITOR */}
                <div className="vscode-editor">
<pre>
{`{
  "timeline": [`}
                    {timelineData.map((item, index) => (
                        <div key={index}>
{`    {
      "year": "${item.year}",
      "event": "${item.event}",
      "detail": "${item.detail}"
    }${index !== timelineData.length - 1 ? "," : ""}`}
                        </div>
                    ))}
{`
  ]
}`}
</pre>
                </div>
            </div>
        </section>
    );
};

export default AboutNew;