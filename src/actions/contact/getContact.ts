import { COMPANY_INFO } from "@/config/seoConf";
import { defineAction, ActionError } from "astro:actions";
import { Resend } from "resend";
import { z } from "astro/zod";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const getContact = defineAction({
  accept: "form",
  input: z.object({
    nombre: z
      .string()
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .max(80, "El nombre debe tener menos de 80 caracteres"),
    cargo: z.string().optional(),
    email: z.email("Ingrese un correo electrónico válido"),
    telefono: z
      .string()
      .min(10, "El número de teléfono debe tener al menos 10 caracteres")
      .regex(
        /^[\+]?[0-9\s]+$/,
        "El teléfono solo puede contener números, espacios y el símbolo +",
      ),
    asunto: z.string().optional(),
    mensaje: z
      .string()
      .min(10, "El mensaje debe tener al menos 10 caracteres")
      .max(500, "El mensaje debe tener menos de 500 caracteres"),
    privacidad: z
      .union([z.literal("true"), z.null()])
      .refine((val) => val === "true", {
        message: "Debes aceptar la política de privacidad",
      }),
  }),
  handler: async ({ nombre, cargo, email, telefono, asunto, mensaje }) => {
    try {
      const { data, error } = await resend.emails.send({
        from: `${COMPANY_INFO.name} <onboarding@resend.dev>`,
        to: COMPANY_INFO.email,
        subject: `Nueva consulta — ${asunto ?? "Sin asunto"}`,
        html: `
  <div style="max-width:600px;margin:0 auto;font-family:Arial,Helvetica,sans-serif;background-color:#0d0014;">

  <!-- Header -->
  <div style="background-color:#12001c;padding:36px 32px;text-align:center;border-bottom:1px solid #c9a84c;">
    <h1 style="font-family:Georgia,serif;color:#c9a84c;margin:0;font-size:26px;font-weight:normal;letter-spacing:0.05em;">
      ${COMPANY_INFO.name}
    </h1>
    <p style="color:rgba(255,255,255,0.5);margin:8px 0 0;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;">
      Abogados Electorales
    </p>
  </div>

  <!-- Alert banner -->
  <div style="background-color:#c9a84c;padding:12px 32px;text-align:center;">
    <p style="color:#12001c;margin:0;font-size:13px;font-weight:bold;letter-spacing:0.1em;text-transform:uppercase;">
      Nueva consulta confidencial recibida
    </p>
  </div>

  <!-- Body -->
  <div style="background-color:#1a0028;padding:32px;">

    <!-- Client Info -->
    <h3 style="font-family:Georgia,serif;color:#c9a84c;margin:0 0 16px;font-size:15px;font-weight:normal;letter-spacing:0.08em;text-transform:uppercase;border-bottom:1px solid rgba(201,168,76,0.25);padding-bottom:10px;">
      Datos del Solicitante
    </h3>

    <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);width:140px;">
          <span style="color:rgba(255,255,255,0.45);font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">Nombre</span>
        </td>
        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
          <span style="color:#f0ece8;font-size:15px;">${nombre}</span>
        </td>
      </tr>
      ${
        cargo
          ? `<tr>
        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);width:140px;">
          <span style="color:rgba(255,255,255,0.45);font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">Cargo o Rol</span>
        </td>
        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
          <span style="color:#f0ece8;font-size:15px;">${cargo}</span>
        </td>
      </tr>`
          : ""
      }
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);width:140px;">
          <span style="color:rgba(255,255,255,0.45);font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">Correo</span>
        </td>
        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
          <a href="mailto:${email}" style="color:#c9a84c;font-size:15px;text-decoration:none;">${email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);width:140px;">
          <span style="color:rgba(255,255,255,0.45);font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">Teléfono</span>
        </td>
        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
          <a href="tel:${telefono}" style="color:#c9a84c;font-size:15px;text-decoration:none;">${telefono}</a>
        </td>
      </tr>
      ${
        asunto
          ? `<tr>
        <td style="padding:10px 0;width:140px;">
          <span style="color:rgba(255,255,255,0.45);font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">Asunto Legal</span>
        </td>
        <td style="padding:10px 0;">
          <span style="color:#f0ece8;font-size:15px;">${asunto}</span>
        </td>
      </tr>`
          : ""
      }
    </table>

    <!-- Mensaje -->
    <h3 style="font-family:Georgia,serif;color:#c9a84c;margin:0 0 16px;font-size:15px;font-weight:normal;letter-spacing:0.08em;text-transform:uppercase;border-bottom:1px solid rgba(201,168,76,0.25);padding-bottom:10px;">
      Descripción del Caso
    </h3>

    <div style="background-color:#12001c;border-left:3px solid #c9a84c;padding:20px 24px;border-radius:0 6px 6px 0;margin-bottom:32px;">
      <p style="color:rgba(240,236,232,0.8);line-height:1.7;margin:0;font-size:15px;white-space:pre-wrap;">${mensaje}</p>
    </div>

    <!-- Reply CTA -->
    <div style="text-align:center;margin-bottom:32px;">
      <a href="mailto:${email}" style="display:inline-block;background-color:#c9a84c;color:#12001c;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;padding:14px 32px;border-radius:6px;">
        Responder por correo
      </a>
    </div>

    <!-- Footer -->
    <div style="text-align:center;padding-top:24px;border-top:1px solid rgba(255,255,255,0.08);">
      <p style="color:rgba(255,255,255,0.3);font-size:12px;margin:0;letter-spacing:0.04em;">
        Recibido el ${new Date().toLocaleDateString("es-CO", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <p style="color:rgba(255,255,255,0.2);font-size:11px;margin:8px 0 0;">
        ${COMPANY_INFO.name} · Derecho Electoral Colombiano
      </p>
    </div>

  </div>
</div>`,
      });

      if (error) {
        console.error("Resend error:", error);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: error.message,
        });
      }

      return { ok: true, data };
    } catch (err) {
      console.error("Handler error:", err);
      throw new ActionError({
        code: "INTERNAL_SERVER_ERROR",
        message: err instanceof Error ? err.message : "Unknown error occurred",
      });
    }
  },
});
