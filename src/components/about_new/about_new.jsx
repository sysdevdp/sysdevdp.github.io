import React, { useState } from "react";
import "./about_new.css";

const timelineData = [
    { year: "2019", event: "Started College", detail: "Began IT studies." },
    { year: "2021", event: "Home Lab", detail: "Built Linux + AWS environments." },
    { year: "2023", event: "Graduated", detail: "Moved into cloud + full-stack." },
    { year: "2024", event: "First Job", detail: "Systems/software engineering." },
    { year: "2025", event: "Projects", detail: "React, Next.js, AWS apps." },
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