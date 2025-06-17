export default function SeatChart({ data }) {
  const ref = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svgWidth = 800;
    const svgHeight = 600;
    const cellSize = 60;

    const svg = d3.select(ref.current)
      .attr('viewBox', `0 0 ${svgWidth} ${svgHeight}`)
      .selectAll('*').remove();

    const group = d3.select(ref.current).append('g');

    data.forEach((d, i) => {
      const x = d.col * cellSize;
      const y = d.row * cellSize;

      group.append('circle')
        .attr('cx', x + cellSize / 2)
        .attr('cy', y + cellSize / 2)
        .attr('r', 20)
        .attr('fill', colorByBezirk(d.Bezirk))
        .attr('stroke', 'black');

      group.append('text')
        .attr('x', x + cellSize / 2)
        .attr('y', y + cellSize / 2 + 4)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px')
        .text(getInitials(d.name));
    });
  }, [data]);

  return <svg ref={ref} style={{ width: '100%', height: 'auto' }} />;
}

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('');
}

function colorByBezirk(wk) {
  const colors = {
    'Appenzell': '#440154',
    'Schwende-Rüte': '#3b528b',
    'Schlatt-Haslen': '#21918c',
    'Gonten': '#5ec962',
    'Oberegg': '#fde725',
  };
  return colors[wk] || '#ccc';
}
