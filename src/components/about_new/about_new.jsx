import React, { useState } from "react";
import "./about_new.css";

const timelineData = [
    { year: "2023", event: "Graduated GMU", detail: "Graduated with a degree in Computer Science concentrating in Cloud" },
    { year: "2025", event: "IT/System Administration Role", detail: "Filled the role of a System Administrator contracted for the DoJ" },
    { year: "2026", event: "Software Engineer", detail: "Software engineer contracted for the DoD. Working on SaaS solutions." },
    {year: "2026", event: "GenAI Project", detail: "Developing a GenAI solution."}
];

export default function AboutNew() {

    const getCenter = () => ({
        x: window.innerWidth / 2 - 450,
        y: window.innerHeight / 2 - 350,
    });

    const [open, setOpen] = useState(false); // ✅ START MINIMIZED

    const [position, setPosition] = useState(getCenter());
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

    const stopDrag = () => {
        setDragging(false);
        setPosition(getCenter());
    };

    const openWindow = () => {
        setOpen(true);
        setPosition(getCenter());
    };

    const closeWindow = () => setOpen(false);

    return (
        <>
            {!open && (
                <div className="desktop-icon" onClick={openWindow}>
                    <div className="icon">📁</div>
                    <div className="icon-label">timeline.json</div>
                </div>
            )}

            {open && (
                <div className="window-layer">

                    <div
                        className={`vscode-window ${dragging ? "dragging" : ""}`}
                        style={{
                            transform: `translate(${position.x}px, ${position.y}px)`,
                        }}
                        onMouseMove={onDrag}
                        onMouseUp={stopDrag}
                    >

                        {/* TOP BAR */}
                        <div className="vscode-topbar" onMouseDown={startDrag}>
                            <div className="dots">
                                <span className="dot red clickable" onClick={closeWindow} />
                                <span className="dot yellow clickable" onClick={closeWindow} />
                                <span className="dot green" />
                            </div>

                            <div className="filename">timeline.json</div>
                        </div>

                        {/* CONTENT */}
                        <div className="vscode-editor">
                            <div className="json-block">
                                <div className="line">{`{`}</div>
                                <div className="line indent">{`"timeline": [`}</div>

                                {timelineData.map((item, i) => (
                                    <div className="line indent-2" key={i}>
{`{
  "year": "${item.year}",
  "event": "${item.event}",
  "detail": "${item.detail}"
}${i !== timelineData.length - 1 ? "," : ""}`}
                                    </div>
                                ))}

                                <div className="line indent">{`]`}</div>
                                <div className="line">{`}`}</div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}