import { LinePath } from '@vx/shape';

export default ({ data, label, yText, yScale, xScale, x, y }) => {
    return (
        <g>
            <LinePath 
                data={data}
                yScale={yScale}
                xScale={xScale}
                x={x}
                y={y}
                strokeDasharray="4,4"
                stokeopacity="0.4"
            />
            <text fill="#6086d6" dy="-0.5em" dx="3em" y={yText} fontSize="12">
                {label}
            </text>
        </g>
    )
}