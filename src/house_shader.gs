#version 330 core
layout (points) in;
layout (triangle_strip, max_vertices = 5) out;

in vec3 vColor[];

out vec3 gColor;

void main() {
    gColor = vColor[0];

    gl_Position = gl_in[0].gl_Position + vec4(-0.2, -0.2, 0.0, 0.0);    // 1:左下
    EmitVertex();   
    gl_Position = gl_in[0].gl_Position + vec4( 0.2, -0.2, 0.0, 0.0);    // 2:右下
    EmitVertex();
    gl_Position = gl_in[0].gl_Position + vec4(-0.2,  0.2, 0.0, 0.0);    // 3:左上
    EmitVertex();
    gl_Position = gl_in[0].gl_Position + vec4( 0.2,  0.2, 0.0, 0.0);    // 4:右上
    EmitVertex();
    gl_Position = gl_in[0].gl_Position + vec4( 0.0,  0.4, 0.0, 0.0);    // 5:顶部
    gColor = vec3(1.0, 1.0, 1.0);
    EmitVertex();

    EndPrimitive();
}